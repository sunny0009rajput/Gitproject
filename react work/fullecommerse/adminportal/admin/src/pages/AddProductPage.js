import axios from "axios";
import { useState, useEffect } from "react";

const AddProductModal = ({
  isOpen,
  onClose,
  products = [],
  onRefresh,
  product,
}) => {
  const [formData, setFormData] = useState({
    product_name: "",
    product_price: "",
    product_description: "",
    product_category: "",
    product_subcategory: "",
    product_size: [],
    product_color: [],
    mainPhoto: null,
    sub1Photo: null,
    sub2Photo: null,
    sub3Photo: null,
    product_date: new Date().toISOString().split("T")[0],
    total_stock: 1,
    product_type: "",
    brand: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const apiurl = process.env.REACT_APP_BACKEND_URL;

  // Auto stock based on category
  useEffect(() => {
    if (!product && formData.product_category) {
      const categoryCount = products.filter(
        (p) => p.product_category === formData.product_category
      ).length;
      setFormData((prev) => ({ ...prev, total_stock: categoryCount + 1 }));
    } else {
      setFormData((prev) => ({ ...prev, total_stock: 0 }));
    }
  }, [formData.product_category, products, product]);

  useEffect(() => {
    if (product) {
      setFormData({
        product_name: product.product_name || "",
        product_price: product.product_price || "",
        product_description: product.product_description || "",
        product_category: product.product_category || "",
        product_subcategory: product.product_subcategory || "",
        product_size: Array.isArray(product.product_size)
          ? product.product_size
          : [],
        product_color: Array.isArray(product.product_color)
          ? product.product_color
          : [],

        mainPhoto: product.mainPhoto || "",
        sub1Photo: product.sub1Photo || "",
        sub2Photo: product.sub2Photo || "",
        sub3Photo: product.sub3Photo || "",
        product_date:
          product.product_date || new Date().toISOString().split("T")[0],
        total_stock: product.total_stock || 1,
        product_type: product.product_type || "",
        brand: product.brand || "",
      });
    } else {
      setFormData({
        product_name: "",
        product_price: "",
        product_description: "",
        product_category: "",
        product_subcategory: "",
        product_size: [],
        product_color: [],
        mainPhoto: null,
        sub1Photo: null,
        sub2Photo: null,
        sub3Photo: null,
        product_date: new Date().toISOString().split("T")[0],
        total_stock: 1,
        product_type: "",
        brand: "",
      }); // reset if adding new
    }
  }, [product, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // ✅ Handle multiple checkboxes (arrays)
    if (type === "checkbox") {
      setFormData((prev) => {
        const currentValues = Array.isArray(prev[name]) ? prev[name] : [];
        if (checked) {
          // add if not already present
          return { ...prev, [name]: [...currentValues, value] };
        } else {
          // remove if unchecked
          return { ...prev, [name]: currentValues.filter((v) => v !== value) };
        }
      });
    }
    // ✅ Handle file upload
    else if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
    // ✅ Handle normal text/number/select
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.product_name.trim())
      newErrors.product_name = "Product Name is required";
    if (!formData.product_price || isNaN(formData.product_price))
      newErrors.product_price = "Valid price is required";
    if (!formData.product_description.trim())
      newErrors.product_description = "Description required";
    if (!formData.product_category.trim())
      newErrors.product_category = "Category required";
    if (!formData.product_subcategory.trim())
      newErrors.product_subcategory = "Subcategory required";
    

    if (!formData.mainPhoto) newErrors.mainPhoto = "Main Photo required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const dataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          if (Array.isArray(value)) {
            value.forEach((v) => dataToSend.append(key, v));
          } else {
            dataToSend.append(key, value);
          }
        }
      });

      let response;
      if (product) {
        response = await axios.put(
          `${apiurl}/products/${product._id}`,
          dataToSend,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(`${apiurl}/products`, dataToSend, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      // For both POST and PUT, show success page
      if (response.status >= 200 && response.status < 300) {
        setSubmitted(true); // <-- Show success
        if (typeof onRefresh === "function") {
          onRefresh();
        }
      } else {
        alert(response.data?.message || "Error saving product");
      }
    } catch (error) {
      console.error("Save product failed:", error);
      alert(
        error?.response?.data?.message ||
          error?.message ||
          "An error occurred while saving product."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Add Product</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Product {product ? "Updated" : "Added"}Successfully!
              </h3>
              <button
                onClick={handleClose}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "product_name", label: "Product Name", type: "text" },
                { id: "product_price", label: "Price", type: "number" },
                {
                  id: "product_description",
                  label: "Description",
                  type: "textarea",
                },
                {
                  id: "product_category",
                  label: "Category",
                  type: "select",
                  options: ["Men", "Women", "kids"],
                },
                {
                  id: "product_subcategory",
                  label: "Subcategory",
                  type: "select",
                  options: ["TopWear", "BottomWear", "Both"],
                },
                {
                  id: "product_size",
                  label: "Size",
                  type: "checkbox",
                  options: [
                    "0-3",
                    "3-6",
                    "6-9",
                    "9-12",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "2xl",
                  ],
                },
                {
                  id: "product_color",
                  label: "Color",
                  type: "checkbox",
                  options: [
                    "Red",
                    "Blue",
                    "Green",
                    "Black",
                    "White",
                    "Yellow",
                    "Pink",
                    "Purple",
                    "Orange",
                    "Brown",
                    "Grey",
                    "Beige",
                    "Maroon",
                    "Navy",
                    "Sky Blue",
                    "Olive",
                    "Teal",
                    "Turquoise",
                    "Gold",
                    "Silver",
                    "Cream",
                    "Lavender",
                    "Magenta",
                    "Cyan",
                  ],
                },
                {
                  id: "product_type",
                  label: "type",
                  type: "select",
                  options: ["BestSeller", "New Arrival", "Premium", "Trending","Normal"],
                },
                { id: "brand", label: "brand", type: "text" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label} *
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg text-black h-32 resize-none"
                      rows={4}
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg text-black"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "checkbox" ? (
                    <div className="flex flex-wrap gap-2">
  {field.options.map((opt) => {
    const isChecked = formData[field.id]?.includes(opt);
    return (
      <label
        key={opt}
        className={`cursor-pointer px-4 py-2 rounded-lg border text-sm font-medium transition 
        ${isChecked 
          ? "bg-blue-600 text-white border-blue-600 shadow-md" 
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
      >
        <input
          type="checkbox"
          name={field.id}
          value={opt}
          checked={isChecked}
          onChange={handleChange}
          className="hidden"
        />
        {opt}
      </label>
    );
  })}
</div>

                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg text-black"
                    />
                  )}
                  {errors[field.id] && (
                    <p className="text-red-500 text-xs">{errors[field.id]}</p>
                  )}
                </div>
              ))}

              {/* Date (auto) */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="product_date"
                  value={formData.product_date}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-black"
                />
              </div> */}

              {/* Total Stock (auto) */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Total Stock (auto)
                </label>
                <input
                  type="number"
                  name="total_stock"
                  value={formData.total_stock}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-black"
                />
              </div> */}

              {/* Image uploads with filename display */}
              {["mainPhoto", "sub1Photo", "sub2Photo", "sub3Photo"].map(
                (photo) => (
                  <div key={photo}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {photo === "mainPhoto"
                        ? "Main Photo *"
                        : "Additional Photo"}
                    </label>

                    <div className="flex items-center gap-3">
                      <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <span className="text-gray-600">Upload Image</span>
                        <input
                          type="file"
                          accept="image/*"
                          name={photo}
                          onChange={handleChange}
                          className="hidden"
                        />
                      </label>

                      <span className="text-sm text-gray-600 truncate">
                        {formData[photo]?.name || "No file selected"}
                      </span>
                    </div>

                    {errors[photo] && (
                      <p className="text-red-500 text-xs">{errors[photo]}</p>
                    )}
                  </div>
                )
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : product
                    ? "Update Product"
                    : "Add Product"}
                </button>
                <button
                  onClick={handleClose}
                  type="button"
                  className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;

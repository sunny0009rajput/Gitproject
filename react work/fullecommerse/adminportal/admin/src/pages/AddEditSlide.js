import axios from "axios";
import { useState, useEffect } from "react";

const AddEditSlideModal = ({
  isOpen,
  onClose,
  slides = [],
  onRefresh,
  slide,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    cta: "",
    color: "",

    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const apiurl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    if (slide) {
      setFormData({
        title: slide.title || "",
        subtitle: slide.subtitle || "",
        cta: slide.cta || "",
        color: slide.color || "",

        image: slide.image || "",
      });
    } else {
      setFormData({
        title: "",
        subtitle: "",
        cta: "",
        color: "",

        image: null,
      }); // reset if adding new
    }
  }, [slide, isOpen]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // ✅ Handle file upload
    if (files) {
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
    if (!formData.title.trim()) newErrors.title = "title  is required";

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
      if (slide) {
        response = await axios.put(
          `${apiurl}/slider/${slide._id}`,
          dataToSend,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(`${apiurl}/slider`, dataToSend, {
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
          <h2 className="text-2xl font-bold text-gray-800">Add slider</h2>
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
                Slider {slide ? "Updated" : "Added"}Successfully!
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
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter slide title"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs">{errors.title}</p>
                )}
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subtitle
                </label>
                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter slide subtitle"
                />
              </div>

              {/* CTA */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CTA (Button Text / Link)
                </label>
                <input
                  type="text"
                  name="cta"
                  value={formData.cta || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter CTA"
                />
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter background color (e.g. #ff0000 or blue)"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image *
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <span className="text-gray-600">Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-sm text-gray-600 truncate">
                    {formData.image?.name ||
                      (typeof formData.image === "string"
                        ? formData.image
                        : "No file selected")}
                  </span>
                </div>
                {errors.image && (
                  <p className="text-red-500 text-xs">{errors.image}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : slide
                    ? "Update Slider"
                    : "Add Slider"}
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

export default AddEditSlideModal;

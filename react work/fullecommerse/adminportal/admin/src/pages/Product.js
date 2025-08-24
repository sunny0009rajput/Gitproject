import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import axios from "axios";
import {
  Pagination,
  PaginationInfo,
  ItemsPerPageSelector,
} from "./Pagination";
import AddProductModal from "./AddProductPage";

const Products = () => {
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "product_name",
    direction: "asc",
  });

  const [visibleColumns] = useState([
    "product_name",
    "product_price",
    "product_description",
    "product_category",
    "product_subcategory",
    "product_size",
    "product_color",
    "mainPhoto",
    "sub1Photo",
    "sub2Photo",
    "sub3Photo",
    "product_date",
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletedProduct, setDeletedProduct] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch products
 // Fetch products
const fetchProducts = async () => {
  try {
    const res = await axios.get(`${apiurl}/products`);
    const data = res.data;

    // ✅ Always set as array
    setProducts(Array.isArray(data) ? data : [data]);
  } catch (err) {
    console.error("Error fetching products:", err);
    setProducts([]); // fallback empty array
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  // Column definitions
  const columns = [
    { label: "Name", key: "product_name" },
    { label: "Price", key: "product_price" },
    { label: "Description", key: "product_description" },
    { label: "Category", key: "product_category" },
    { label: "Subcategory", key: "product_subcategory" },
    { label: "Size", key: "product_size" },
    { label: "Color", key: "product_color" },
    { label: "Main Photo", key: "mainPhoto" },
    { label: "Sub Photo 1", key: "sub1Photo" },
    { label: "Sub Photo 2", key: "sub2Photo" },
    { label: "Sub Photo 3", key: "sub3Photo" },
    { label: "Added Date", key: "product_date" },
  ];

  const getByPath = (obj, path) =>
    path.split(".").reduce((acc, key) => acc?.[key], obj);

  // Search
  // const matchesSearch = (product, q) => {
  //   if (!q) return true;
  //   const needle = q.toLowerCase();
  //   return columns.some(({ key }) => {
  //     const v = getByPath(product, key);
  //     if (!v) return false;
  //     return v.toString().toLowerCase().includes(needle);
  //   });
  // };

  const matchesSearch = (product, q) => {
  if (!q) return true;
  const needle = q.toString().toLowerCase();

  const searchableFields = [
    "product_name",
    "product_description",
    "product_category",
    "product_subcategory",
    "product_color",
    "product_price",
    "product_size",
  ];

  return searchableFields.some((field) => {
    const v = product[field];
    if (v === undefined || v === null) return false;
    return v.toString().toLowerCase().includes(needle);
  });
};


  // Sorting
  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  // Filter + Sort
  const sortedFilteredProducts = useMemo(() => {
  const q = search.trim();
  const arr = Array.isArray(products) ? products : [];

  const filtered = arr.filter((p) => matchesSearch(p, q));

  if (!sortConfig?.key) return filtered;
  const { key, direction } = sortConfig;
  const dir = direction === "asc" ? 1 : -1;

  return [...filtered].sort((a, b) => {
    const va = getByPath(a, key) ?? "";
    const vb = getByPath(b, key) ?? "";
    if (va < vb) return -1 * dir;
    if (va > vb) return 1 * dir;
    return 0;
  });
}, [products, search, sortConfig]);


  // Pagination
  const totalItems = sortedFilteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = sortedFilteredProducts.slice(startIndex, endIndex);

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiurl}/products/${id}`, { withCredentials: true });
      const deleted = products.find((p) => p._id === id);
      setDeletedProduct(deleted || { product_name: "Product" });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Products</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => {
              setEditingProduct(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {columns
                  .filter((c) => visibleColumns.includes(c.key))
                  .map(({ label, key }) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      className="px-6 py-3 cursor-pointer text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {label}{" "}
                      {sortConfig.key === key
                        ? sortConfig.direction === "asc"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                  ))}
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((p) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  {columns
                    .filter((c) => visibleColumns.includes(c.key))
                    .map(({ key }) => {
                      let value = getByPath(p, key);

                      if (key === "product_date" && value) {
                        const dateObj = new Date(value);
                        value = isNaN(dateObj) ? value : dateObj.toLocaleDateString();
                      }

                      if (key === "product_description" && typeof value === "string") {
                        const words = value.split(" ");
                        value = words.length > 10 ? words.slice(0, 10).join(" ") + "..." : value;
                      }

                      return (
                        <td key={key} className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {["mainPhoto", "sub1Photo", "sub2Photo", "sub3Photo"].includes(key) && value ? (
                            <img
                              src={value}
                              alt={key}
                              loading="lazy"
                              className="w-16 h-16 object-cover rounded-md border"
                            />
                          ) : (
                            value ?? ""
                          )}
                        </td>
                      );
                    })}
                  <td className="px-6 py-4 mt-7 whitespace-nowrap flex items-center gap-2">
                    <Edit
                      onClick={() => {
                        setEditingProduct(p);
                        setIsModalOpen(true);
                      }}
                      className="w-4 h-4 text-gray-400 hover:text-green-600 cursor-pointer"
                    />
                    <Trash2
                      onClick={() => handleDelete(p._id)}
                      className="w-4 h-4 text-gray-400 hover:text-red-600 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal (only mounted when open) */}
      {isModalOpen && (
        <AddProductModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingProduct(null);
          }}
          onRefresh={fetchProducts}
          product={editingProduct}
        />
      )}

      {/* Delete Success Modal */}
      {deletedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              {deletedProduct.product_name} Deleted Successfully!
            </h3>
            <button
              onClick={() => setDeletedProduct(null)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-4 gap-4 overflow-x-auto">
        <ItemsPerPageSelector
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(n) => {
            setItemsPerPage(n);
            setCurrentPage(1);
          }}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <PaginationInfo
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
    </div>
  );
};

export default Products;

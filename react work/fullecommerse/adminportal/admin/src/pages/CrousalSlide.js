import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import axios from "axios";

import AddEditSlideModal from "./AddEditSlide";

const CrousalSlide = () => {
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  const [slides, setSlides] = useState([]);

  

  const [visibleColumns] = useState([
  "title",
  "subtitle",
  "cta",
  "color",
  "image",
]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlide, setEditingSlide] = useState(null);
  const [deletedSlide, setDeletedSlide] = useState(null);



  // Fetch products
 // Fetch products
const fetchProducts = async () => {
  try {
    const res = await axios.get(`${apiurl}/slider`);
    const data = res.data;

    // ✅ Always set as array
    setSlides(Array.isArray(data) ? data : [data]);
  } catch (err) {
    console.error("Error fetching products:", err);
    setSlides([]); // fallback empty array
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  // Column definitions
  const columns = [
    { label: "Title", key: "title" },
    { label: "Subtitle", key: "subtitle" },
    { label: "Cta", key: "cta" },
    { label: "color", key: "color" },
    
    { label: "Image", key: "image" },
    
  ];

  

 

 




  
 

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiurl}/slider/${id}`, { withCredentials: true });
      const deleted =slides.find((p) => p._id === id);
      setDeletedSlide(deleted || { title: "title" });
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
        <h2 className="text-2xl font-bold text-gray-900">Crousal Slider </h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
          <button
            onClick={() => {
              setEditingSlide(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Crousal slider
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
                      
                      className="px-6 py-3 cursor-pointer text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {label}{" "}
                      
                    </th>
                  ))}
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {slides.map((p) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  {columns
                    .filter((c) => visibleColumns.includes(c.key))
                    .map(({ key }) => {
                      let value =p[key];

                      

                      

                      return (
                        <td key={key} className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {["image"].includes(key) && value ? (
                            <div className="w-32 h-20 flex items-center justify-center bg-gray-100 rounded-md border overflow-hidden">
                            <img
                              src={value}
                              alt={key}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                            </div>
                          ) : (
                            value ?? ""
                          )}
                        </td>
                      );
                    })}
                  <td className="px-6 py-4 mt-7 whitespace-nowrap flex items-center gap-2">
                    <Edit
                      onClick={() => {
                        setEditingSlide(p);
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
        <AddEditSlideModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingSlide(null);
          }}
          onRefresh={fetchProducts}
          slide={editingSlide}
        />
      )}

      {/* Delete Success Modal */}
      {deletedSlide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              {deletedSlide.title} Deleted Successfully!
            </h3>
            <button
              onClick={() => setDeletedSlide(null)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}

      
      
    </div>
  );
};

export default CrousalSlide;

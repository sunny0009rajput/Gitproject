import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import axios from "axios";

import AddPosterModal from "./AddPoster";

const Poster = () => {
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  const [poster, setPoster] = useState([]);

  

  const [visibleColumns] = useState([
  "poster_name",
  "poster_category",
  "image",
]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPoster, setEditingPoster] = useState(null);
  const [deletedPoster, setDeletedPoster] = useState(null);



  // Fetch products
 // Fetch products
const fetchProducts = async () => {
  try {
    const res = await axios.get(`${apiurl}/poster`);
    const data = res.data;

    // ✅ Always set as array
    setPoster(Array.isArray(data) ? data : [data]);
  } catch (err) {
    console.error("Error fetching products:", err);
    setPoster([]); // fallback empty array
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  // Column definitions
  const columns = [
    { label: "poster_name", key: "poster_name" },
    { label: "poster_category", key: "poster_category" },
  
    { label: "Image", key: "image" },
    
  ];

  

 

 




  
 

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiurl}/poster/${id}`, { withCredentials: true });
      const deleted =poster.find((p) => p._id === id);
      setDeletedPoster(deleted || { poster_name: "poster_name" });
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
        <h2 className="text-2xl font-bold text-gray-900">poster and image </h2>
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
              setEditingPoster(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add poster and image
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
              {poster.map((p) => (
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
                        setEditingPoster(p);
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
        <AddPosterModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingPoster(null);
          }}
          onRefresh={fetchProducts}
          poster={editingPoster}
        />
      )}

      {/* Delete Success Modal */}
      {deletedPoster && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              {deletedPoster.poster_name} Deleted Successfully!
            </h3>
            <button
              onClick={() => setDeletedPoster(null)}
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

export default Poster;

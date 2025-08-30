import { useEffect, useState } from "react";
import axios from "axios";
import { MapPin, Edit, PlusCircle, CheckCircle } from "lucide-react";

export default function DeliveryLocation({ onSelect }) {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newAddr, setNewAddr] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const res = await axios.get("/api/customer/addresses", { withCredentials: true });
      setAddresses(res.data);
      const defaultAddr = res.data.find((a) => a.isDefault);
      if (defaultAddr) {
        setSelectedAddressId(defaultAddr._id);
        onSelect?.(defaultAddr);
      }
    } catch (err) {
      console.error("Error fetching addresses:", err);
    }
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/customer/addresses", newAddr, { withCredentials: true });
      setAddresses(res.data.addresses);
      setShowForm(false);
      setNewAddr({ street: "", city: "", state: "", postalCode: "", country: "India" });
    } catch (err) {
      console.error("Error adding address:", err);
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border">
      <h3 className="font-semibold text-gray-900 flex items-center mb-3">
        <MapPin className="w-5 h-5 mr-2 text-blue-600" /> Deliver to
      </h3>

      {/* No address → show add button */}
      {addresses.length === 0 && !showForm && (
        <div className="text-center">
          <p className="text-gray-600">No address found</p>
          <button
            onClick={() => setShowForm(true)}
            className="text-blue-600 mt-2 flex items-center"
          >
            <PlusCircle className="w-5 h-5 mr-1" /> Add Address
          </button>
        </div>
      )}

      {/* Add Address Form */}
      {showForm && (
        <form onSubmit={handleAddAddress} className="space-y-3 mb-4">
          <input
            type="text"
            placeholder="Street"
            value={newAddr.street}
            onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={newAddr.city}
            onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="State"
            value={newAddr.state}
            onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={newAddr.postalCode}
            onChange={(e) => setNewAddr({ ...newAddr, postalCode: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Address
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Existing addresses list */}
      {addresses.length > 0 && (
        <div className="space-y-3">
          {addresses.map((addr) => (
            <div
              key={addr._id}
              className={`p-3 border rounded-lg ${
                selectedAddressId === addr._id ? "border-blue-500" : ""
              }`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="selectedAddress"
                  checked={selectedAddressId === addr._id}
                  onChange={() => {
                    setSelectedAddressId(addr._id);
                    onSelect?.(addr);
                  }}
                />
                <span>
                  {addr.street}, {addr.city}, {addr.state} {addr.postalCode}, {addr.country}
                </span>
              </label>
              {addr.isDefault && (
                <span className="ml-2 text-green-600 text-xs flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" /> Default
                </span>
              )}
            </div>
          ))}

          {/* Always show add another */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="text-blue-600 flex items-center mt-3"
            >
              <PlusCircle className="w-5 h-5 mr-1" /> Add Another Address
            </button>
          )}
        </div>
      )}
    </div>
  );
}

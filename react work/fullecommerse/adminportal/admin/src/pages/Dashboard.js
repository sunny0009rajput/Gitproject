import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiurl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [ordersRes, productsRes, usersRes] = await Promise.all([
          axios.get(`${apiurl}/orders`, { withCredentials: true }),
          axios.get(`${apiurl}/products`, { withCredentials: true }),
          axios.get(`${apiurl}/customer/users`, { withCredentials: true }),
        ]);
        console.log({
          orders: ordersRes.data,
          products: productsRes.data,
          users: usersRes.data,
        });

        setOrders(ordersRes.data || []);

        setProducts(productsRes.data || []);

        setUsers(usersRes.data || []);

       console.log("Orders API response:", ordersRes.data);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [apiurl]);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  // === Calculations ===
  const totalRevenue = orders
    .filter((o) => o.Order_status?.trim().toLowerCase() === "delivered")
    .reduce((sum, o) => {
      let base = o.total_amount
        ? Number(o.total_amount)
        : Number(o.product_details?.product_price || 0) *
          Number(o.product_details?.product_quantity || 0);

      let charges =
        Number(o.delivery_charges || 0) + Number(o.hidden_charges || 0);

      return sum + base + charges;
    }, 0);

  const totalProducts = products.length;
  const totalUsers = users.length;

  // Group products by category
  // Group products by category
  const categoryCounts = products.reduce((acc, p) => {
    const category = p.product_category || "Unknown"; // ✅ direct access
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Now filter categories with less than 2 products
  const lowStockCategories = Object.entries(categoryCounts)
    .filter(([_, count]) => count < 2)
    .map(([category, count]) => ({ category, count }));

  console.log(lowStockCategories);

  // Dashboard stats
  const dashboardStats = [
    {
      title: "Total Revenue",
      value: `₹${totalRevenue}`,
      change: "as of now",
      color: "text-green-600",
      icon: DollarSign,
    },
    {
      title: "Total Products",
      value: totalProducts,
      change: "currently",
      color: "text-blue-600",
      icon: Package,
    },
    {
      title: "Total Users",
      value: totalUsers,
      change: "latest stats",
      color: "text-purple-600",
      icon: Users,
    },
    {
      title: "Low Stock Alerts",
      value: lowStockCategories.length,
      change: lowStockCategories.length > 0 ? "Check now" : "All good",
      color: lowStockCategories.length > 0 ? "text-red-600" : "text-green-600",
      icon: ShoppingCart,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
                <p className={`text-sm mt-1 ${stat.color}`}>
                  <TrendingUp className="inline w-4 h-4 mr-1" />
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-lg bg-gray-50`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders + Low Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Orders
          </h3>
          <div className="space-y-3">
            {orders
              .slice(-4)
              .reverse()
              .map((order) => (
                <div
                  key={order._id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                     {Array.isArray(order.products) && order.products[0]?.name || "Unnamed Product"}
                    </p>
                    <p className="text-sm text-gray-600">
                     ₹{Array.isArray(order.products) && order.products[0]?.price || 0}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">
                      
                          ₹{(Array.isArray(order.products) && order.products[0]?.price || 0) *
            (Array.isArray(order.products) && order.products[0]?.qty || 1)}
                    </p>
                    <span
                    // className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(
                    //   order.status
                    // )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Low Stock Products */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Low Stock Alert
          </h3>
          <div className="space-y-3">
            {lowStockCategories.map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"
              >
                <div>
                  <p className="font-medium text-gray-900">{cat.category}</p>
                  <p className="text-sm text-gray-600">{cat.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">
                    Only {cat.count} left left
                  </p>
                  <span
                  // className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(
                  //   product.status
                  // )}`}
                  >
                    "Low Stock"
                  </span>
                </div>
              </div>
            ))}
            {lowStockCategories.length === 0 && (
              <p className="text-sm text-gray-500">No low stock items 🎉</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

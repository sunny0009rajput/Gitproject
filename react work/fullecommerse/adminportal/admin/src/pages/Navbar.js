import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Outlet, useNavigate } from "react-router-dom";
import { LogOut, Menu, X, Bell, User } from "lucide-react";
import axios from "axios";

const Navbar = ({ sidebarOpen, setSidebarOpen, sidebarItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [admin, setAdmin] = useState(null);
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  

  useEffect(() => {
  const fetchAdmin = async () => {
    try {
      const res = await axios.get(`${apiurl}/auth/adminme`, { withCredentials: true });
      setAdmin(res.data.user); // { id, username, role }
    } catch (err) {
      console.error("Error fetching admin info:", err);
    }
  };

  fetchAdmin();
}, []);




  



  const handleLogout = async () => {
  try {
    await axios.post(
      `${apiurl}/auth/adminlogout`,{}, { withCredentials: true }
    );
    // ✅ Clear localStorage (make sure you remove the same key you set at login)
    localStorage.removeItem("user");
    // If you also keep token in localStorage, remove it
    localStorage.removeItem("token");

    // Redirect to login
    navigate("/login");
  } catch (error) {
    console.error("Logout failed:", error.response?.data || error.message);
  }
};

  return (
    <div className="flex h-screen w-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 bg-white shadow-lg flex flex-col`}
      >
        {/* Header with toggle button */}
        <div className="p-6 border-b flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold">A</div>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Admin Portal</h1>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Sidebar items */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-blue-200 border"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {/* Topbar */}
        <header className="bg-white shadow-sm border-b px-4 sm:px-6 py-3 sm:py-4 w-full">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 capitalize truncate">
              {location.pathname.replace("/", "") || "dashboard"}
            </h2>

            {/* Notifications + Profile */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button> */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg"><div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">
                        {admin ? admin.username.charAt(0).toUpperCase() : ""}
                      </span>
                    </div></span>
                  </div>
                  <div className="hidden xs:block sm:block text-left">
                    <p className="text-sm font-medium text-gray-900">
                      {admin ? admin.username : ""}
                    </p>
                    <p className="text-xs text-gray-500"> {admin ? admin.email : ""}</p>
                  </div>
                </button>
                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    {/* <button
                      onClick={() => navigate("/profile")}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <User className="w-4 h-4" /> My Profile
                    </button> */}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Navbar;

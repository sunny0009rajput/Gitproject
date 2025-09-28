import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [loadingCustomer, setLoadingCustomer] = useState(true);

  const apiurl = process.env.REACT_APP_BACKEND_URL;

  const fetchCustomer = async () => {
  setLoadingCustomer(true);
  try {
    const res = await axios.get(`${apiurl}/customer/customerme`, {
      withCredentials: true,
      headers: { "Cache-Control": "no-store" },
    });
    const user = res.data.user;
    console.log("Fetched user:", user);
    setCustomer(user);

    if (user && user.customer_name && user.customer_phone) {
      const paymentRes = await axios.post(
        `${apiurl}/check-payment`,
        { customerId: user._id },
        { withCredentials: true }
      );
      console.log("Payment check response:", paymentRes.data);
      setPaymentVerified(paymentRes.data.verified);
    } else {
      setPaymentVerified(false);
    }
  } catch (err) {
    console.log("Error fetching customer:", err);
    setCustomer(null);
    setPaymentVerified(false);
  } finally {
    setLoadingCustomer(false);
  }
};

const getActionLink = () => {
  console.log("Customer:", customer, "PaymentVerified:", paymentVerified);
  if (!customer) return { to: "/login", label: "Login" };
  if (customer && !paymentVerified) return { to: "/checkout", label: "Make Payment" };
  if (customer && paymentVerified) return { to: "/mybatch", label: "MyBatch" };
};


  useEffect(() => {
    fetchCustomer();
    window.addEventListener("login", fetchCustomer);
    window.addEventListener("logout", fetchCustomer);
    return () => {
      window.removeEventListener("login", fetchCustomer);
      window.removeEventListener("logout", fetchCustomer);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${apiurl}/customer/customerlogout`,
        {},
        { withCredentials: true }
      );
      localStorage.clear();
      setCustomer(null);
      setPaymentVerified(false);
      window.dispatchEvent(new Event("logout"));
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err.message);
    }
  };

 

  const actionLink = !loadingCustomer ? getActionLink() : null;

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="h-20 bg-black/10 backdrop-blur-lg rounded-2xl border border-white/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold tracking-wide">
            BrandName
          </h1>

          {/* Desktop nav */}
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/youtube">YouTube Course</NavLink>
            <NavLink to="/chatgptcourse">ChatGPT Course</NavLink>
            <NavLink to="/timemanagementcourse">Time Management Course</NavLink>
            <NavLink to="/EBook">E-Book</NavLink>
            {!loadingCustomer && actionLink && (
              <NavLink to={actionLink.to}>{actionLink.label}</NavLink>
            )}
          </div>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center space-x-2">
            {!loadingCustomer && actionLink && (
              <NavLink to={actionLink.to}>{actionLink.label}</NavLink>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <div className="md:hidden mt-2 bg-black/90 rounded-2xl border border-white/20 shadow-xl transition-all">
              <MobileLink to="/home" close={() => setIsOpen(false)}>
                Home
              </MobileLink>
              <MobileLink to="/youtube" close={() => setIsOpen(false)}>
                YouTube Course
              </MobileLink>
              <MobileLink to="/chatgptcourse" close={() => setIsOpen(false)}>
                ChatGPT Course
              </MobileLink>
              <MobileLink
                to="/timemanagementcourse"
                close={() => setIsOpen(false)}
              >
                Time Management Course
              </MobileLink>
              <MobileLink to="/EBook" close={() => setIsOpen(false)}>
                E-Book
              </MobileLink>
              {!loadingCustomer && actionLink && (
                <MobileLink to={actionLink.to} close={() => setIsOpen(false)}>
                  {actionLink.label}
                </MobileLink>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105"
  >
    {children}
  </Link>
);

const MobileLink = ({ to, children, close }) => (
  <Link
    to={to}
    onClick={close}
    className="block px-4 py-3 text-white text-base font-medium hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
  >
    {children}
  </Link>
);

export default Navbar;

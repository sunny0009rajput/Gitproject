// src/ProtectedRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoute({ children, requirePayment = false }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        // ✅ 1. Verify login session from cookie
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/customer/customerme`,
          { withCredentials: true }
        );
        const user = res.data.user;

        if (!user) {
          setIsAllowed(false);
          setLoading(false);
          return;
        }

        // ✅ 2. If payment is required, check that as well
        if (requirePayment) {
          const payRes = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/check-payment`,
            { customerId: user._id },
            { withCredentials: true }
          );
          setIsAllowed(payRes.data.verified === true);
        } else {
          setIsAllowed(true);
        }
      } catch (err) {
        console.error("ProtectedRoute error:", err);
        setIsAllowed(false);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [requirePayment]);

  if (loading) {
    return <div className="text-center mt-10 text-white">Loading…</div>;
  }

  if (!isAllowed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

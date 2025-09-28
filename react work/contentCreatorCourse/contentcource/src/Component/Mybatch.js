import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const defaultCourseImage = "/dhruvrathethumbnail.png"; // Ensure this image is in your public folder

function Mybatch({ customer, paymentVerified }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("customerToken");

  const fetchCourses = async () => {
    if (!token) {
      setError("You must be logged in to view courses.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data } = await axios.get(`${apiUrl}/courses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(data);
    } catch (err) {
      setError("Unable to load courses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

const handleContinue = async (course) => {
  if (!customer) {
    navigate("/login");
    return;
  }

  try {
    const { data } = await axios.get(`${apiUrl}/courses/${course.slug}/purchased`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.purchased) {
      // Redirect to the YouTube course page
      navigate(`/course/${course.slug}`);
    } else {
      // Redirect to checkout page
      navigate(`/checkout/${course.slug}`);
    }
  } catch (err) {
    console.error("Purchase check failed:", err);
    navigate(`/checkout/${course.slug}`);
  }
};



  if (loading)
    return <div className="text-center mt-10 text-white">Loading courses…</div>;

  if (error)
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">{error}</p>
        <button
          onClick={fetchCourses}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="min-h-screen pt-28 bg-black/90 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        My Courses
      </h1>

      {courses.length === 0 ? (
        <p className="text-center text-white">
          You haven’t enrolled in any courses yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={course.image || defaultCourseImage}
                alt={course.title}
                className="w-full h-40 object-cover rounded-2xl mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 text-sm flex-1">{course.description}</p>
              <button
                onClick={() => handleContinue(course)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mybatch;

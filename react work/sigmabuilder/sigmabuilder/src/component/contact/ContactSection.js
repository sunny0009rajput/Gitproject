import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  Youtube,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [dialog, setDialog] = useState({
    open: false,
    success: null,
    message: "",
  });

  // Handle field change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Validate input
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    try {
      const data = new FormData();
      data.append("access_key", "7c236854-bbde-4227-b757-4b9d4a58cefc");
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));
      data.append("from_name", "Sigma Builder");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then((r) => r.json());

      setDialog({
        open: true,
        success: res.success,
        message: res.success
          ? "Your form has been submitted successfully 🎉"
          : "Failed to send message. Please try again ❌",
      });

      if (res.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      }
    } catch {
      setDialog({
        open: true,
        success: false,
        message: "An error occurred. Please try again later ❌",
      });
    }
  };

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[400px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover our portfolio of exceptional properties, from luxury estates
            to modern apartments crafted for extraordinary living.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Info + Social */}
          <div className="space-y-10">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-black" />,
                title: "Location",
                text: "Guru Nanak Nagar, Moga, Punjab, 142001",
              },
              {
                icon: <Phone className="w-6 h-6 text-black" />,
                title: "Phone",
                text: "(91+) 7090948664",
              },
              {
                icon: <Mail className="w-6 h-6 text-black" />,
                title: "Email",
                text: "sigmabuilders.official@gmail.com",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 group transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div>
              <p className="text-gray-800 text-lg mb-4 font-semibold">
                Find Sigma Builder on:
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Youtube />, color: "hover:bg-red-600", url: "https://www.youtube.com/@SigmaBuilders51" },
                  { icon: <Instagram />, color: "hover:bg-pink-600", url:"https://www.instagram.com/sigma_buildersofficial/" },
                  { icon: <Twitter />, color: "hover:bg-blue-400" },
                  { icon: <Facebook />, color: "hover:bg-blue-600" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    aria-label="Social link"
                    className={`w-12 h-12 bg-blue-700/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 ${s.color} hover:scale-110 hover:shadow-lg`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6"
          >
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={`Your ${field[0].toUpperCase() + field.slice(1)}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
                {errors[field] && (
                  <p className="text-blue-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
            <div>
              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none transition-colors"
              />
              {errors.message && (
                <p className="text-blue-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white font-bold rounded-lg hover:from-blue-700 hover:to-sky-600 transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* SUCCESS / ERROR DIALOG */}
      {dialog.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
          <div className="bg-white text-black rounded-2xl shadow-lg p-8 w-96 text-center">
            {dialog.success ? (
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            ) : (
              <XCircle className="w-12 h-12 text-blue-500 mx-auto" />
            )}
            <h2 className="text-2xl font-bold mt-4">
              {dialog.success ? "Success!" : "Oops!"}
            </h2>
            <p className="text-gray-600 mt-2">{dialog.message}</p>
            <button
              onClick={() => setDialog({ ...dialog, open: false })}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

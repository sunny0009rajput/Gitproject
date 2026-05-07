import React from "react";
import youtubeIcon from "../assets/youtubeIcon.jpg";
import instagramIcon from "../assets/instagramIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
const socialLinks = [
  {
    name: "YouTube",
    icon: (
      <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 object-contain" />
    ),
    url: "#",
    hoverColor: "hover:bg-red-600",
  },
  {
    name: "Instagram",
    icon: (
      <img
        src={instagramIcon}
        alt="Instagram"
        className="w-6 h-6 object-contain"
      />
    ),
    url: "#",
    hoverColor: "hover:bg-pink-600",
  },
  {
    name: "Twitter",
    icon: (
      <img src={twitterIcon} alt="Twitter" className="w-6 h-6 object-contain" />
    ),
    url: "#",
    hoverColor: "hover:bg-blue-400",
  },
  {
    name: "Facebook",
    icon: (
      <img
        src={facebookIcon}
        alt="Facebook"
        className="w-6 h-6 object-contain"
      />
    ),
    url: "#",
    hoverColor: "hover:bg-blue-600",
  },
];

export default function ContactSection() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className=" bg-black text-white py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Delhi,India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4 mt-4">Location</h4>
                  <p className="text-gray-300">
                    128th Street Avenue <br />
                    Delhi, India
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 mt-4">Working Hours</h4>
                  <p className="text-gray-300">
                    Monday - Saturday: 9AM - 8PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4 mt-4">Call Us</h4>
                  <p className="text-gray-300">
                    +91 9876543210 <br />
                    +91 9876543211
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 mt-4">
                    Connect With Us
                  </h4>

                  <div className="flex gap-4 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`p-3 rounded-full bg-gray-800 ${social.hoverColor} hover:scale-110 transition duration-300`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

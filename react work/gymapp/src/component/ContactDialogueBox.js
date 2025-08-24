import { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    bookingDate: '',
    bookingTime: '',
    duration: '30'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setApiMessage("Sending your message... ");


    try {
        const dataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            dataToSend.append(key, value);
        });
        dataToSend.append("access_key", "21f066cd-a321-4b79-b96f-bcd4fca82b67");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend,
        });

        const data = await response.json();

        if (data.success) {
            setApiMessage("Message sent successfully!");
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                bookingDate: '',
                bookingTime: '',
                duration: '30'
            });

        } else {
            setApiMessage(data.message);
        }
    } catch (error) {
        setApiMessage("An error occurred while sending your message. Please try again later.");
    } setIsSubmitting(false);
};


  const handleClose = () => {
    setSubmitted(false);
    setErrors({});
    setApiMessage("");
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      bookingDate: '',
      bookingTime: '',
      duration: '30'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            // Success Message
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button
                onClick={handleClose}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl transition-all duration-200"
              >
                Close
              </button>
            </div>
          ) : (

            <form onSubmit={handleSubmit}>
            // Contact Form
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Send Information</h3>
                <p className="text-gray-600">Fill out the form below and we'll get in touch with you shortly.</p>
              </div>

              <div className="space-y-4">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-lg text-black placeholder-gray-500 focus:outline-none transition-colors duration-200 ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border text-black placeholder-gray-500 rounded-lg focus:outline-none transition-colors duration-200 ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border text-black placeholder-gray-500 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border text-black placeholder-gray-500 rounded-lg focus:outline-none transition-colors duration-200 ${
                        errors.subject 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 py-2 border text-black placeholder-gray-500 rounded-lg focus:outline-none transition-colors duration-200 resize-none ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Booking Information */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="text-md font-semibold text-gray-800 mb-4">Booking Slot Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="bookingDate"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-3 py-2 text-black placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="bookingTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time
                      </label>
                      <select
                        id="bookingTime"
                        name="bookingTime"
                        value={formData.bookingTime}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border text-black placeholder-gray-500 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      >
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="09:30">9:30 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="10:30">10:30 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="14:30">2:30 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="15:30">3:30 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="16:30">4:30 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                        Duration
                      </label>
                      <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-black placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      >
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                        <option value="90">1.5 hours</option>
                        <option value="120">2 hours</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Booking Information:</p>
                        <ul className="space-y-1 text-blue-700">
                          <li>• Available slots: Monday to Friday, 9:00 AM - 5:00 PM</li>
                          <li>• We'll confirm your booking within 2 hours</li>
                          <li>• You can reschedule up to 24 hours before the appointment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type ="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-3 rounded-lg font-medium text-white transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  
                  <button
                    onClick={handleClose}
                    className="flex-1 sm:flex-none sm:px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
                
              </div>

            </div>
            </form>
          )}
        </div>
      </div>

    </div>
  );
};

export default ContactModal;

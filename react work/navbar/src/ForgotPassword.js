import { useState } from 'react';

const ForgotPassword = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    }

    if (!validateEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onEmailSubmit(email);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 space-y-8">
          {/* Header with icon */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6a4 4 0 11-8 0 4 4 0 018 0zm6-6V9a6.002 6.002 0 00-4-5.659V3a2 2 0 10-4 0v.341C7.67 4.165 6 6.388 6 9v2m0 0v1.5a3.5 3.5 0 007 0V11m-7 0h14l-1 7H8l-1-7z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Forgot Password?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              No worries! Enter your email address and we'll send you a secure link to reset your password.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-white/90">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-white/40 group-focus-within:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 bg-white/10 border ${
                    errors.email 
                      ? 'border-red-400 focus:border-red-300' 
                      : 'border-white/30 focus:border-white/50'
                  } rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-sm transition-all duration-200 text-sm`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <div className="flex items-center space-x-2 mt-2">
                  <svg className="h-4 w-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-sm text-red-300">{errors.email}</p>
                </div>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`relative w-full py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-200 transform ${
                isSubmitting
                  ? 'bg-white/20 text-white/50 cursor-not-allowed scale-98'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg active:scale-95'
              } focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent`}
            >
              <div className="flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white"></div>
                    <span>Sending Reset Link...</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                    <span>Send Reset Link</span>
                  </>
                )}
              </div>
            </button>

            <div className="text-center pt-4">
              <button className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-1 mx-auto group">
                <svg className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span>Back to Login</span>
              </button>
            </div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl -z-10 scale-110"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce animation-delay-1000"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300/40 rounded-full animate-bounce animation-delay-3000"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-purple-300/40 rounded-full animate-bounce animation-delay-5000"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-pink-300/50 rounded-full animate-pulse"></div>

      <style jsx>{`
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-5000 { animation-delay: 5s; }
        .scale-98 { transform: scale(0.98); }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
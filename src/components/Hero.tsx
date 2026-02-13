"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section
      id="quote"
      className="relative min-h-[700px] flex items-center pt-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-vesper-charcoal/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-gray-800 font-semibold">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            <h1 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl uppercase mb-4 leading-tight">
              The Painting
              <br />
              Company You Can Trust
            </h1>
            <p className="text-xl md:text-2xl font-light uppercase tracking-wider">
              Exceptional Craftsmanship & Reliable Service
            </p>
          </div>

          {/* Right Side - Quote Form */}
          <div className="bg-gray-50/90 backdrop-blur-[2px] rounded-lg shadow-2xl p-8 lg:p-10 max-w-lg ml-auto w-full">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-0.5 bg-vesper-coral" />
              <h2 className="font-oswald font-semibold text-2xl text-green-700 uppercase whitespace-nowrap">
                Get a Free Quote
              </h2>
              <div className="w-10 h-0.5 bg-vesper-coral" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name and Last Name - 2 column grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    First name<span className="text-vesper-coral">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:border-green-700 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    Last name<span className="text-vesper-coral">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:border-green-700 bg-white"
                  />
                </div>
              </div>

              {/* Email and Phone - 2 column grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    Email<span className="text-vesper-coral">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:border-green-700 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    Phone number<span className="text-vesper-coral">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:border-green-700 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:border-green-700 resize-none bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-vesper-coral hover:bg-vesper-coral/90 text-white font-oswald font-semibold uppercase py-3.5 rounded transition-colors text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

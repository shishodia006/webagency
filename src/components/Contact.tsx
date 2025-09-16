"use client";
import { useState } from "react";
import countryList from "react-select-country-list";
import Select, { SingleValue } from "react-select";
// Types for country options for react-select
type CountryOption = {
  label: string;
  value: string;
};
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

  const countries: CountryOption[] = countryList().getData();

  // Handle input & textarea changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle country select change
  const handleCountryChange = (option: SingleValue<CountryOption>) => {
    setSelectedCountry(option);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form, selectedCountry);

    // Reset form after submit
    setForm({ name: "", email: "", message: "" });
    setSelectedCountry(null);
  };

  return (
    <section
      id="contact"
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 bg-white flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
    >
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white-900 mb-4">
          Let’s Talk Business
        </h2>
        <p className="text-white-600 text-lg">
          Have an idea or project in mind? We’re here to help you turn it into
          reality.
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="lg:w-1/2 w-full bg-gray-50 p-8 rounded-2xl shadow-xl animate-fade-in">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Country */}
          <Select
            options={countries}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select Country"
            className="rounded-xl"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.75rem",
                borderColor: "#d1d5db",
                padding: "4px",
                boxShadow: "none",
                "&:hover": { borderColor: "#2563eb" },
              }),
            }}
          />

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us more about your project..."
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

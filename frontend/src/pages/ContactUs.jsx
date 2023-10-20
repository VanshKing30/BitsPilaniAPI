import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);

    // Simulate an API call (replace this with your actual API call logic)
    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form data
    }, 1000);
  };

  return (
    <div className=" text-purple-800 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white rounded shadow-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-purple-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-purple-300 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-2 border border-purple-300 rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


import React from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className=" text-purple-800 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center justify-center">
        {/* Left Section: Logo */}
        <div className="mb-8 lg:mb-0 mr-0 lg:mr-8">
          <img src={logo} alt="Logo" className="w-500 h-250" />
        </div>

        {/* Right Section: Description */}
        <div className="max-w-md p-8 bg-white rounded shadow-md text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">
            About Our Canteen Management System
          </h1>
          <p className="text-lg mb-4">
            Welcome to our canteen management system! Our website is designed to
            streamline the dining experience for college campuses. Canteen
            owners can effortlessly display their menu and meals, allowing
            students to conveniently view the offerings and make informed
            choices.
          </p>
          <p className="text-lg">
            Our user-friendly platform connects canteen operators and students,
            ensuring a seamless and efficient process for managing meals and
            orders. Join us in embracing technology to enhance the way we enjoy
            meals on campus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

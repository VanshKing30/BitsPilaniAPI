// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import ProfileModal from "./ProfileModal";
// import profile from "../assets/profile.jpg"

// const Navbar = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const defaultUserData = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     mobile: "123-456-7890",
//     image: profile, // Provide the path to the default user image
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-lg p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <Link to="/home">
//           <img src={logo} alt="Logo" className="h-12" />
//         </Link>
//         <div className="space-x-4">
//           <Link to="/home" className="text-gray-800 hover:text-purple-800 font-semibold">
//             Home
//           </Link>
//           <Link to="/about" className="text-gray-800 hover:text-purple-800 font-semibold">
//             About Us
//           </Link>
//           <Link to="/contact" className="text-gray-800 hover:text-purple-800 font-semibold">
//             Contact Us
//           </Link>
//           <button onClick={openModal} className="text-gray-800 hover:text-purple-800 font-semibold focus:outline-none">
//             My Profile
//           </button>
//         </div>
//         <ProfileModal isOpen={modalIsOpen} closeModal={closeModal} user={defaultUserData} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import ProfileModal from "./ProfileModal";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const defaultUserData = {
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "123-456-7890",
    image: profile,
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav className="bg-blue-200 text-purple-800 p-3 font-semibold shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
        <div className="space-x-4">
          <Link to="/home" className="hover:text-indigo-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-400">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-indigo-400">
            Contact Us
          </Link>
          <button onClick={openModal} className="hover:text-indigo-400 focus:outline-none">
            My Profile
          </button>
        </div>
        <ProfileModal isOpen={modalIsOpen} closeModal={closeModal} user={defaultUserData} />
      </div>
    </nav>
  );
};

export default Navbar;






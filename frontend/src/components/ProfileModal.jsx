// import React from "react";
// import Modal from "react-modal";

// const ProfileModal = ({ isOpen, closeModal, user }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closeModal}
//       className="modal"
//       overlayClassName="overlay fixed inset-0 z-50 flex items-center justify-end top-[-180px] right-[20px]"
//     >
//       <div className="text-center p-8 bg-white w-64 rounded-l shadow-lg">
//         <img src={user.image} alt="Default User" className="w-32 h-32 mx-auto rounded-full mb-4" />
//         <h2 className="text-2xl font-semibold">{user.name}</h2>
//         <p className="text-gray-600 mb-2">{user.email}</p>
//         <p className="text-gray-600">{user.mobile}</p>
//         <button
//           onClick={closeModal}
//           className="mt-4 text-purple-600 hover:underline cursor-pointer focus:outline-none"
//         >
//           Close
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default ProfileModal;

import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const ProfileModal = ({ isOpen, closeModal, user }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay fixed inset-0 z-50 flex items-center justify-end top-[-180px] right-[20px]"
    >
      <div className="text-center p-8 bg-white w-64 rounded-l shadow-lg">
        <img
          src={user.image}
          alt="Default User"
          className="w-32 h-32 mx-auto rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <p className="text-gray-600">{user.mobile}</p>
        <Link to="/">
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-300"
          >
            Log out
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default ProfileModal;

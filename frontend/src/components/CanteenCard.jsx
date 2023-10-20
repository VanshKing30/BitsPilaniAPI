// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const CanteenCard = ({ canteen }) => {
//   const [selectedRecipes, setSelectedRecipes] = useState({});

//   const handleAddToMenu = (recipeId) => {
//     setSelectedRecipes((prevSelectedRecipes) => ({
//       ...prevSelectedRecipes,
//       [canteen.id]: [...(prevSelectedRecipes[canteen.id] || []), recipeId],
//     }));
//   };

//   return (
//     <div className="bg-purple-600 text-white shadow-lg rounded-lg overflow-hidden m-4 flex-1 max-w-md border border-b-8 border-purple-900 transform hover:scale-105 transition duration-300 ease-in-out">
//       <img
//         src={canteen.imageUrl}
//         alt={canteen.name}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h2 className="font-semibold text-xl mb-4 font-serif">
//           {canteen.name}
//         </h2>
//         <p className="text-gray-200 mb-4 font-sans">{canteen.description}</p>
//         <Link
//           to={`/menu/${canteen.id}`}
//           className="block text-blue-300 hover:text-purple-300 font-semibold transition duration-300 ease-in-out transform hover:translate-x-2"
//         >
//           View Menu
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CanteenCard;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import canteen1 from "../assets/canteen1.jpeg"

const CanteenCard = ({ canteen }) => {
  const [selectedRecipes, setSelectedRecipes] = useState({});

  const handleAddToMenu = (recipeId) => {
    setSelectedRecipes((prevSelectedRecipes) => ({
      ...prevSelectedRecipes,
      [canteen.id]: [...(prevSelectedRecipes[canteen.id] || []), recipeId],
    }));
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4 mx-2 transition duration-300 ease-in-out transform hover:scale-105">
    <div className="flex justify-center">
      <a href="#">
        <img
          className="rounded-t-lg h-48 w-full object-cover"
          src={canteen1}
          alt={canteen.name}
        />
      </a>
    </div>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500 transition duration-300 ease-in-out">
          {canteen.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {canteen.description}
      </p>
      <Link
        to={`/menu/${canteen.id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out"
      >
        View Menu
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  </div>
  );
};

export default CanteenCard;

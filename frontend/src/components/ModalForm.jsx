// import React, { useState } from "react";
// import RecipeDropdown from "./RecipeDropdown";
// import toast from "react-hot-toast";

// const ModalForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     minCalories: "",
//     maxCalories: "",
//     minProtein: "",
//     maxProtein: "",
//     cuisine: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Validate the form data if necessary
//     // Perform form submission logic
//     console.log(formData);
//     onSubmit(formData);

//     setTimeout(() => {
//       toast.success("Submitted Successfully");
//       setFormData({
//         minCalories: "",
//         maxCalories: "",
//         minProtein: "",
//         maxProtein: "",
//       }); // Clear form data
//     }, 500);
//   };

//   return (
//     <form className="mb-4" onSubmit={handleFormSubmit}>
//       <div className="mb-4">
//         <label className="block text-sm font-semibold text-gray-600">
//           Cuisine
//         </label>
//         <select
//           required
//           className="border border-gray-300 p-2 rounded w-full"
//           name="cuisine"
//           value={formData.cuisine}
//           onChange={handleInputChange}
//         >
//           <option value="" disabled selected hidden>Select Cuisine</option>
//           <option value="Indian">Indian</option>
//           <option value="Chinese">Chinese</option>
//           <option value="Italian">Italian</option>
//           <option value="American">American</option>
//           <option value="Asian">Asian</option>
//           <option value="European">European</option>
//           <option value="Mexican">Mexican</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-semibold text-gray-600">
//           Minimum Calories
//         </label>
//         <input
//           required
//           type="number"
//           className="border border-gray-300 p-2 rounded w-full"
//           name="minCalories"
//           value={formData.minCalories}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-semibold text-gray-600">
//           Maximum Calories
//         </label>
//         <input
//           required
//           type="number"
//           className="border border-gray-300 p-2 rounded w-full"
//           name="maxCalories"
//           value={formData.maxCalories}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-semibold text-gray-600">
//           Minimum Protein
//         </label>
//         <input
//           required
//           type="number"
//           className="border border-gray-300 p-2 rounded w-full"
//           name="minProtein"
//           value={formData.minProtein}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-semibold text-gray-600">
//           Maximum Protein
//         </label>
//         <input
//           required
//           type="number"
//           className="border border-gray-300 p-2 rounded w-full"
//           name="maxProtein"
//           value={formData.maxProtein}
//           onChange={handleInputChange}
//         />
//       </div>

//       <button
//         type="submit"
//         className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ModalForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ModalForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    minCalories: "",
    maxCalories: "",
    minProtein: "",
    maxProtein: "",
    cuisine: "",
  });

  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            minCalories: formData.minCalories,
            maxCalories: formData.maxCalories,
            minProtein: formData.minProtein,
            maxProtein: formData.maxProtein,
            cuisine: formData.cuisine,
            apiKey: "18e9dac0a3be41269d3aea489f4b769e",
            number: 8,
          },
        }
      );

      setRecipes(response.data.results);
      toast.success("Recipes Fetched Successfully");
    } catch (error) {
      console.error("Error fetching recipes:", error);
      toast.error("Error Fetching Recipes");
    }

    setFormData({
      minCalories: "",
      maxCalories: "",
      minProtein: "",
      maxProtein: "",
      cuisine: "",
    });
  };

  const handleAddToMenu = (recipeId) => {
    // Logic to add the recipe to the menu
    // You can implement this based on your application's requirements
    toast.success("Added to menu");
    console.log("Added to menu:", recipeId);
  };

  return (
    <div>
      <form className="mb-4" onSubmit={handleFormSubmit}>
        {/* ... Previous form fields ... */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Cuisine
          </label>
          <select
            required
            className="border border-gray-300 p-2 rounded w-full"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleInputChange}
          >
            <option value="" disabled selected hidden>
              Select Cuisine
            </option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="European">European</option>
            <option value="Mexican">Mexican</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Minimum Calories
          </label>
          <input
            required
            type="number"
            className="border border-gray-300 p-2 rounded w-full"
            name="minCalories"
            value={formData.minCalories}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Maximum Calories
          </label>
          <input
            required
            type="number"
            className="border border-gray-300 p-2 rounded w-full"
            name="maxCalories"
            value={formData.maxCalories}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Minimum Protein
          </label>
          <input
            required
            type="number"
            className="border border-gray-300 p-2 rounded w-full"
            name="minProtein"
            value={formData.minProtein}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Maximum Protein
          </label>
          <input
            required
            type="number"
            className="border border-gray-300 p-2 rounded w-full"
            name="maxProtein"
            value={formData.maxProtein}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {/* Render recipes */}
      {recipes.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Recipes</h2>
          <div className="flex flex-wrap">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="w-1/2 p-4">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-32 object-cover mb-2"
                />
                <h3 className="text-base font-semibold mb-1">
                  {" "}
                  {/* Decreased font size here */}
                  {recipe.title}
                </h3>
                <button
                  onClick={() => handleAddToMenu(recipe.id)}
                  className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Add to Menu
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;

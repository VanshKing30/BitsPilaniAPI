

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import CanteenList from "../components/CanteenList";

function Home() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    // Fetch data from Spoonacular API
    axios
      .get(`https://api.spoonacular.com/mealplanner/generate?apiKey=34462306af26445289175a21480dea30&timeFrame=day&targetCalories=2000`)
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((error) => {
        console.error("Error fetching data from Spoonacular API: ", error);
      });
  }, []);

  function handleMealClick(meal) {
    setSelectedMeal(meal);
  }

  function handleFeedbackSubmit() {
    // Logic to handle feedback submission
    toast.success("Feedback Submitted!");
  }


  return (
    <div className=" min-h-screen">
      <Navbar />
      <div className="text-center">
        <CanteenList />
      </div>
    </div>
      
  );
}

export default Home;




























{/* <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Today's Meal</h2>
        {selectedMeal ? (
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">{selectedMeal.title}</h3>
            <img
              src={`https://spoonacular.com/recipeImages/${selectedMeal.id}-240x150.${selectedMeal.imageType}`}
              alt={selectedMeal.title}
              className="mb-4 rounded"
            />
            <p>Ready in {selectedMeal.readyInMinutes} minutes</p>
            <p>Servings: {selectedMeal.servings}</p>
            <p>
              <a href={selectedMeal.sourceUrl} target="_blank" rel="noopener noreferrer">
                Recipe Link
              </a>
            </p>
          </div>
        ) : (
          <p>No meal selected for today.</p>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Available Meals</h2>
        <ul className="list-disc pl-8">
          {meals.map((meal) => (
            <li key={meal.id} className="cursor-pointer text-blue-500 hover:underline" onClick={() => handleMealClick(meal)}>
              {meal.title}
            </li>
          ))}
        </ul>
      </div>

      {selectedMeal && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Meal Feedback</h2>
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded"
            placeholder="Enter your feedback here..."
          ></textarea>
          <button onClick={handleFeedbackSubmit} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Submit Feedback
          </button>
        </div>
      )}

      
    </div> */}





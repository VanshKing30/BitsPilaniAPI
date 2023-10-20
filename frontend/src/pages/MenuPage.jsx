

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";

function MenuPage() {
  const { id } = useParams();
  const [breakfast, setBreakfast] = useState({ title: "", image: "" });
  const [lunch, setLunch] = useState({ title: "", image: "" });
  const [dinner, setDinner] = useState({ title: "", image: "" });

  useEffect(() => {
    // Fetch data for breakfast
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=34462306af26445289175a21480dea30&cuisine=indian`
      )
      .then((response) => {
        setBreakfast(response.data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching breakfast data: ", error);
      });

    // Fetch data for lunch
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=34462306af26445289175a21480dea30&cuisine=indian`
      )
      .then((response) => {
        setLunch(response.data.results[1]);
      })
      .catch((error) => {
        console.error("Error fetching lunch data: ", error);
      });

    // Fetch data for dinner
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=34462306af26445289175a21480dea30&cuisine=indian`
      )
      .then((response) => {
        setDinner(response.data.results[2]);
      })
      .catch((error) => {
        console.error("Error fetching dinner data: ", error);
      });
    
  }, []);

  function handleMealClick(meal) {
    // Handle click logic here
  }

  function handleFeedbackSubmit() {
    // Logic to handle feedback submission
    toast.success("Feedback Submitted!");
  }

  return (
    <div className=" text-purple-800 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to Canteen {id} </h1>

        {/* Breakfast, Lunch, and Dinner Sections */}
        <div className="grid grid-cols-3 gap-4">
          {/* Breakfast */}
          {breakfast && (
            <div className="bg-white p-6 rounded shadow-md text-purple-800">
              <h2 className="text-2xl font-bold mb-4">Breakfast</h2>
              <img src={breakfast.image} alt={""} className="mb-2 rounded" />
              <p>{breakfast.title}</p>
            </div>
          )}

          {/* Lunch */}
          {lunch && (
            <div className="bg-white p-6 rounded shadow-md text-purple-800">
              <h2 className="text-2xl font-bold mb-4">Lunch</h2>
              <img src={lunch.image} alt={""} className="mb-2 rounded" />
              <p>{lunch.title}</p>
            </div>
          )}

          {/* Dinner */}
          {dinner && (
            <div className="bg-white p-6 rounded shadow-md text-purple-800">
              <h2 className="text-2xl font-bold mb-4">Dinner</h2>
              <img src={dinner.image} alt={""} className="mb-2 rounded" />
              <p>{dinner.title}</p>
            </div>
          )}
        </div>



        {/* Meal Feedback */}
        <div className="mt-8 text-purple-800">
          <h2 className="text-2xl font-bold mb-4">Meal Feedback</h2>
          <textarea
            className="w-full h-32 p-4 border border-purple-300 rounded mb-4"
            placeholder="Enter your feedback here..."
          ></textarea>
          <button
            onClick={handleFeedbackSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;














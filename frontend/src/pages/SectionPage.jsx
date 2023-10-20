
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

const SectionPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');
  const [formData, setFormData] = useState(null);
  const [selectedBreakfastRecipes, setSelectedBreakfastRecipes] = useState([]);
  const [selectedLunchRecipes, setSelectedLunchRecipes] = useState([]);
  const [selectedDinnerRecipes, setSelectedDinnerRecipes] = useState([]);

  const handleSectionClick = (sectionName) => {
    setSelectedSection(sectionName);
    setShowModal(true);

    
  };

  const handleFormSubmit = (data) => {
    // Handle form submission logic here, for example, send data to the server
    console.log('Form Data:', data);
    
    // Determine the selected section and update the corresponding state variable
    if (selectedSection === 'Breakfast') {
      setSelectedBreakfastRecipes([...selectedBreakfastRecipes, data]);
    } else if (selectedSection === 'Lunch') {
      setSelectedLunchRecipes([...selectedLunchRecipes, data]);
    } else if (selectedSection === 'Dinner') {
      setSelectedDinnerRecipes([...selectedDinnerRecipes, data]);
    }

    setFormData(data); // Save form data if needed
    setShowModal(false); // Close the modal after form submission
  };

  return (
<div className=" text-center text-purple-800 min-h-screen">
  <Navbar/>
      <h1 className="text-4xl font-bold mb-8">Select Today's Menu</h1>
      <div className="flex space-x-4 justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSectionClick('Breakfast')}>
          Breakfast
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSectionClick('Lunch')}>
          Lunch
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSectionClick('Dinner')}>
          Dinner
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} sectionName={selectedSection} onSubmit={handleFormSubmit} />
      
      
    </div>
  );
};

export default SectionPage;


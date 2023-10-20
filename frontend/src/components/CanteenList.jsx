// CanteenList.js
import React from 'react';
import CanteenCard from './CanteenCard';

const canteens = [
  {
    id: 1,
    name: 'Canteen 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'canteen1.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Canteen 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'canteen1.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Canteen 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'canteen1.jpg', // Replace with actual image URL
  },
  // Add more canteen objects as needed
];

const CanteenList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {canteens.map(canteen => (
        <CanteenCard key={canteen.id} canteen={canteen} />
      ))}
    </div>
  );
};

export default CanteenList;

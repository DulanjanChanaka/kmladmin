import React, { useState } from 'react';

function Orders() {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  
  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
    setSelectedModel('');
  };
  
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div>
      <h2>Select a vehicle:</h2>
      <select value={selectedVehicle} onChange={handleVehicleChange}>
        <option value="">Select</option>
        <option value="car">Car</option>
        <option value="bike">Bike</option>
      </select>

      {selectedVehicle && (
        <div>
          <h2>Select a model:</h2>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Select</option>
            {selectedVehicle === "car" && (
              <>
                <option value="alto">Alto</option>
                <option value="bmw">BMW</option>
                <option value="benz">Benz</option>
              </>
            )}
            {selectedVehicle === "bike" && (
              <>
                <option value="bajaj">Bajaj</option>
                <option value="honda">Honda</option>
              </>
            )}
          </select>
        </div>
      )}
    </div>
  );
}




export default Orders
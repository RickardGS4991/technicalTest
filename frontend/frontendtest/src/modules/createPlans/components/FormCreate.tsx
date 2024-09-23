import React, { useState } from 'react';
import axios from 'axios';
import SearchStation from './SearchStation';

interface StationModel {
  name: string;
  id: number;
}

interface TripModel {
  name: string;
  stations?: StationModel[];
  date?: Date;
}

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedStations, setSelectedStations] = useState<StationModel[]>([]);

  const handleStationSelect = (stations: StationModel[]) => {
    setSelectedStations(stations);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTrip: TripModel = {
      name,
      stations: selectedStations,
      date: new Date(),
    };

    try {
      await axios.post('http://localhost:4000/api/trip', newTrip, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Successful');
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Travel Plan Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Plan name"
          required
        />
      </div>

      <div className="mb-4">
        <SearchStation onStationSelect={handleStationSelect} />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create plan travel
        </button>
      </div>
    </form>
  );
};

export default Form;
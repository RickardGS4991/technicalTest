import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

interface StationModel {
  name: string;
  id: number;
}

interface SearchStationProps {
  onStationSelect: (selectedStations: StationModel[]) => void; 
}

const SearchStation: React.FC<SearchStationProps> = ({ onStationSelect }) => {
  const [query, setQuery] = useState('');
  const [stations, setStations] = useState<StationModel[]>([]);
  const [selectedStations, setSelectedStations] = useState<StationModel[]>([]);

  const fetchStations = debounce(async (query: string) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/stations`, {
        params: { name: query },
      });
      setStations(response.data);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  }, 300);

  useEffect(() => {
    if (query.length > 0) {
      fetchStations(query);
    } else {
      setStations([]);
    }
  }, [query]);

  const selectStation = (station: StationModel) => {
    if (!selectedStations.some((s) => s.id === station.id)) {
      const updatedStations = [...selectedStations, station];
      setSelectedStations(updatedStations);
      onStationSelect(updatedStations); 
      setQuery('');
      setStations([]); 
    }
  };

  const removeStation = (stationId: number) => {
    const updatedStations = selectedStations.filter(station => station.id !== stationId);
    setSelectedStations(updatedStations);
    onStationSelect(updatedStations);
  };

  return (
    <div className="relative p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search station"
        className="border p-2 w-full"
      />
      {stations.length > 0 && (
        <ul className="absolute bg-white border mt-1 w-full z-10 max-h-60 overflow-auto">
          {stations.map((station) => (
            <li
              key={station.id}
              className="p-2 border-b cursor-pointer hover:bg-gray-200"
              onClick={() => selectStation(station)}
            >
              {station.name}
            </li>
          ))}
        </ul>
      )}

      <h4 className="mt-4">Train Stations selected:</h4>
      <ul>
        {selectedStations.map((station) => (
          <li key={station.id} className="flex justify-between items-center">
            <span>{station.name}</span>
            <button
              onClick={() => removeStation(station.id)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStation;
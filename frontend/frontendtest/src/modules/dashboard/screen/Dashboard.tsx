import React, { useEffect, useState } from "react";
import axios from 'axios';

export const Dashboard: React.FC = () => {
    const [query, setQuery] = useState('');
    const [trips, setTrips] = useState([]);

    const fetchTrips = async(query: string) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/get-trips`,
                {
                    params: { name: '' },
                }
            );
            setTrips(response.data);
        } catch (error) {
            console.error('Error', error);
        };
    };

    useEffect(() => {
        fetchTrips(query);
    }, [query]);
    return(
    <div>
        {JSON.stringify(trips)};
    </div>
    );
}
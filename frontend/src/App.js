import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
            .then(res => setEvents(res.data));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Event Registration System</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id} className="mb-2 p-2 border rounded">
                        <h2 className="text-xl">{event.title}</h2>
                        <p>{event.description}</p>
                        <p>{event.date} at {event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
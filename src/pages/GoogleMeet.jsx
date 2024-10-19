import React, { useState } from 'react';

const GoogleMeet = () => {
  const [meetLink, setMeetLink] = useState('');
  const [loading, setLoading] = useState(false);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Accessing the client ID

  const createMeet = async () => {
    setLoading(true);
    const authToken = 'your_auth_token'; // Retrieve this dynamically
    try {
      const response = await fetch('http://localhost:5173/create-meet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authToken }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMeetLink(data.link);
    } catch (error) {
      console.error("Error creating Google Meet:", error);
      alert("Failed to create Google Meet. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={createMeet} disabled={loading}>
        {loading ? 'Creating...' : 'Create Google Meet'}
      </button>
      {meetLink && <a href={meetLink} target="_blank" rel="noopener noreferrer">{meetLink}</a>}
    </div>
  );
};

export default GoogleMeet;

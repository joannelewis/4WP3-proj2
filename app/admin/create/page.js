"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CreatePage = () => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [completed, setCompleted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { description, deadline, completed };

    await fetch('http://localhost:4000/collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });

    router.push("/admin");
  };

  return (
    <div>
      <h1>Create New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Deadline:</label>
          <input
            type="text"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Completed:</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePage;

import React from 'react';

// This is a server component that fetches data from the API
const CollectionPage = async () => {
  const res = await fetch('http://localhost:4000/collection');
  const items = await res.json();

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.deadline} - <a href={`/collection/${item.id}`}>more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionPage;

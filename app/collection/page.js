import React from 'react';

// This is a server component that fetches data from the API
const CollectionPage = async () => {
  const res = await fetch('http://localhost:4000/collection');
  const items = await res.json();

  return (
    <div>
      <h1>Data</h1>
      <a href="/collection" style={{ display: 'block', marginBottom: '20px', color: 'blue' }}>Back</a>
      <ul style={{ listStyleType: 'none', padding: 0, border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
        {items.map(item => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc', backgroundColor: 'white' }}>
            <div>
              <strong>Deadline:</strong> {item.deadline}
            </div>
            <a href={`/collection/${item.id}`} style={{ color: 'blue', textDecoration: 'none' }}>more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionPage;

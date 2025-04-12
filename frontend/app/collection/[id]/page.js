import React from 'react';

// This is a server component that fetches data for a specific item
const ItemPage = async ({ params }) => {
  const res = await fetch(`http://localhost:4000/collection/${params.id}`);
  const item = await res.json();

  // Check if the item exists
  if (!item) {
    return <h1>Uh oh spaghettio! This page does not exist!</h1>;
  }

  return (
    <div>
      <h1>Item Details</h1>
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{item.id}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{item.description}</td>
          </tr>
          <tr>
            <td>Deadline:</td>
            <td>{item.deadline}</td>
          </tr>
          <tr>
            <td>Completed:</td>
            <td>{item.completed ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
      <a href="/collection">back</a>
    </div>
  );
};

export default ItemPage;

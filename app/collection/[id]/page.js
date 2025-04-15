import React from 'react';

//server component to fetch data for a specific item
const ItemPage = async ({ params }) => {
  const res = await fetch(`http://localhost:4000/collection/${params.id}`);
  //const item = await res.json();

  // Check if item exists
  if (res.status === 200) {
    pass
  }
  else {
    return <h1>Uh oh spaghettio! This page does not exist!</h1>;
  }

  const item = await res.json();

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

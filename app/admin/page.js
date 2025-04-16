import React from 'react';

//Fetch items from the API
const AdminPage = async () => {
  const res = await fetch('http://localhost:4000/collection');
  const items = await res.json();

  //delete item
  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/collection/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <a href="/admin/create" style={{ display: 'block', marginBottom: '20px', color: 'blue' }}>Create New</a>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Deadline</th>
            <th>Completed</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.deadline}</td>
              <td>{item.completed ? 'Yes' : 'No'}</td>
              <td>
                <button>D</button>
              </td>
              <td>
                <a href={`/admin/edit/${item.id}`}>E</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;

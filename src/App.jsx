import React from 'react';
import Form from './Form';
import User from './User';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([])

  const onAddUser = (newData) => {
    setData([...data, newData]);
  }
  return (
    <div className="container">
      <h1>User Management App</h1>
      <h2>Add New User</h2>
      <Form onAddUser={onAddUser} />
      <h2>Users List</h2>
      <ul id="usersList"></ul>
      {data.map(x => <User key = {x.username} data={x} />)}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Form from "./Form";
import User from "./User";
import * as service from "./services/service";


export default function Container() {

  const [data, setData] = useState([])
  const onAddUser = async (newData) => {
    try {
      const response = await service.postData(newData);
      setData([...data, newData]);
      console.log(response);
    } catch (error) {
      console.log(error.message());
    }

  }

  useEffect(() => {
    async function fetchData() {
      try {
        const newData = await service.getData();
        setData(newData);
      } catch (error) {
        console.log(error.message())
      }
    }
    fetchData();
  }, [])


  return (
    <div className="container">
      <h1>User Management App</h1>
      <h2>Add New User</h2>
      <Form onAddUser={onAddUser} />
      <h2>Users List</h2>
      <ul id="usersList">{data.map(user => <User key={user.username} data={user} />)}</ul>
    </div>
  )

}
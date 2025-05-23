import { useState } from "react"

export default function Form({onAddUser}) {
  const [data, setData] = useState({
    name: '',
    email: '',
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(data);
    setData({ name: '', email: '', username: '' });
  }

  return (


    <form id="userForm" onSubmit={handleSubmit}>
      <input type="text" id="name" name = "name" placeholder="Name" required value={data.name} onChange={handleChange} />
      <input type="email" id="email" name = "email" placeholder="Email" required value={data.email} onChange={handleChange} />
      <input type="text" id="username" name = "username" placeholder="Username" required value={data.username} onChange={handleChange} />
      <button type="submit">Add User</button>
    </form>
  )


}
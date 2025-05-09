import { useState } from "react"

export default function Form(props) {
  const [data, setData] = useState({
    name: '',
    email: '',
    username: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddUser(data);
    setData({ name: '', email: '', username: '' });
  }

  return (


    <form id="userForm" onSubmit={handleSubmit}>
      <input type="text" id="name" placeholder="Name" required value={data.name} onChange={handleChange} />
      <input type="email" id="email" placeholder="Email" required value={data.email} onChange={handleChange} />
      <input type="text" id="username" placeholder="Username" required value={data.username} onChange={handleChange} />
      <button type="submit">Add User</button>
    </form>
  )


}
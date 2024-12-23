import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password:"",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ fullName: "", userName: "",password:"" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={formData.fullName}
        onChange={handleInputChange}
        id="name"
        name="fullName"
      />
      <br /> <br />
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        placeholder="Enter Your User Name"
        value={formData.userName}
        onChange={handleInputChange}
        id="username"
        name="userName"
      />
      <br /> <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter Your password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br /> <br />
      <button>Submit</button>
    </form>
  );
}

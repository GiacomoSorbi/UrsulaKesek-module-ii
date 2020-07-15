import React, { useState } from "react";
import "./Contact.css";
import {Form} from "../../components";
import {Input} from "../../components";
import { NavLink } from "react-router-dom";

function Contact() {
  const [userData, setUserData] = useState({});
  const onChangeInput = (event) =>
    setUserData({ ...userData, [event.target.id]: event.target.value });
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };
  const validateForm = () => {
    return userData.password && userData.password === userData.confirmPassword;
  };
  return (
    <main className="contact">
      <Form onSubmit={validateForm() ? onFormSubmit : null}>
        <header className="h">Your Contact Details</header>

        <Input
          id="name"
          label="Your Name:"
          onChange={onChangeInput}
          type="text"
          placeholder="Your Name"
          value={userData.name}
        />
        <Input
          id="email"
          label="Your email:"
          onChange={onChangeInput}
          type="email"
          placeholder="Your Email"
          value={userData.email}
        />
        <Input
          id="password"
          label="Your password:"
          onChange={onChangeInput}
          type="password"
          placeholder="Must have at least 8 characters"
          value={userData.password}
        />
        <Input
          id="confirmPassword"
          label="Confirm password:"
          onChange={onChangeInput}
          type="password"
          placeholder=" Confirm Your Password"
          value={userData.confirmPassword}
        />
              <div className="cpl">
              <NavLink className="bh" to="/">
                BACK TO HOME
              </NavLink>
            </div>
      </Form>
    </main>
  );
}

export default Contact;

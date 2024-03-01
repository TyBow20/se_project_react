import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWIthForm";
import { register } from "../../utils/auth";

const RegisterModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      onClose();
      // Handle successful registration (e.g., redirect to profile page)
    } catch (error) {
      console.error(error);
      // Handle registration errors (e.g., displaying error messages)
    }
  };

  return (
    <ModalWithForm title="Sign Up" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </ModalWithForm>
  );
};

export default RegisterModal;

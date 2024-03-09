import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWIthForm";
import { register } from "../../utils/auth";

const RegisterModal = ({ onClose, onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onRegister(name, email, password, avatar);
      onClose();
      // Handle successful registration (e.g., redirect to profile page)
    } catch (error) {
      console.error(error);
      // Handle registration errors (e.g., displaying error messages)
    }
  };

  return (
    <ModalWithForm
      title="Sign Up"
      //   isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
    >
      {/* <form > */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        required
      />
      {/* </form> */}
    </ModalWithForm>
  );
};

export default RegisterModal;

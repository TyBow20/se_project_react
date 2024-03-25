// import React, { useState } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { register } from "../../utils/auth";
// import "../ModalWithForm/ModalWithForm.css";

// const RegisterModal = ({ onClose, onRegister }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [avatar, setAvatar] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     onRegister(name, email, password, avatar);
//   };

//   return (
//     <ModalWithForm
//       title="Sign Up"
//       //   isOpen={isOpen}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//       buttonText="Sign Up"
//     >
//       {/* <form > */}
//       <b>Name *</b>
//       <input
//         className="modal__text modal__name"
//         type="text"
//         placeholder="Name*"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <b>Email *</b>
//       <input
//         className="modal__text modal__name"
//         type="email"
//         placeholder="Email*"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <b>Password *</b>
//       <input
//         className="modal__text modal__name"
//         type="password"
//         placeholder="Password*"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <b>Avatar URL *</b>
//       <input
//         className="modal__text modal__name"
//         type="text"
//         placeholder="Avatar URL*"
//         value={avatar}
//         onChange={(e) => setAvatar(e.target.value)}
//         required
//       />
//       <button className="modal__garment" type="submit">
//         Sign Up
//       </button>
//       {/* </form> */}
//     </ModalWithForm>
//   );
// };

// export default RegisterModal;

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

const RegisterModal = ({ onClose, onRegister, switchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, email, password, avatar);
  };

  return (
    <ModalWithForm title="Sign Up" onClose={onClose} onSubmit={handleSubmit}>
      <label htmlFor="name" className="modal__label">
        Name *
      </label>
      <input
        id="name"
        className="modal__input"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email" className="modal__label">
        Email *
      </label>
      <input
        id="email"
        className="modal__input"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password" className="modal__label">
        Password *
      </label>
      <input
        id="password"
        className="modal__input"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <label htmlFor="avatar" className="modal__label">
        Avatar URL *
      </label>
      <input
        id="avatar"
        className="modal__input"
        type="text"
        placeholder="Enter your avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        required
      />

      <div className="modal__footer">
        <button className="modal__button" type="submit">
          Sign Up
        </button>
        <span className="modal__option">or</span>
        <button
          className="modal__button modal__button--link"
          type="button"
          onClick={switchToLogin}
        >
          Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;

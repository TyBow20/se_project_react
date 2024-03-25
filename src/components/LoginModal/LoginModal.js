// import React, { useState } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";

// const LoginModal = ({ isOpen, onClose, onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     onLogin(email, password);
//   };

//   return (
//     <ModalWithForm
//       title="Log In"
//       isOpen={isOpen}
//       onClose={onClose}
//       // buttonText={"Login"}
//       onSubmit={handleSubmit}
//     >
//       {/* <form onSubmit={handleSubmit}> */}
//       <h3 className="modal__h3">Email</h3>
//       <input
//         className="modal__text modal__name"
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <h3 className="modal__h3">Password</h3>
//       <input
//         className="modal__text modal__name"
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       {/* </form> */}
//       <button className="modal__garment" type="submit">
//         Log In
//       </button>
//     </ModalWithForm>
//   );
// };

// export default LoginModal;

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onLogin, switchToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <ModalWithForm
      title="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="input-group">
        <label htmlFor="email" className="modal__label">
          Email
        </label>
        <input
          id="email"
          className="modal__text modal__name"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="password" className="modal__label">
          Password
        </label>
        <input
          id="password"
          className="modal__text modal__name"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* <button className="modal__button" type="submit">
        Log In
      </button> */}

      <div className="modal__actions">
        <button className="modal__button" type="submit">
          Log In
        </button>
        <span className="modal__option">or</span>
        <button
          className="modal__button modal__button--link"
          type="button"
          onClick={switchToSignUp}
        >
          Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;

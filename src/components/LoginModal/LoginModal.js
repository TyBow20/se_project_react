// import React, { useState } from "react";
// import ModalWithForm from "./ModalWithForm";
// import { login } from "./auth";

// const LoginModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await login(email, password);
//       console.log("Login Success:", data);
//       onClose();
//     } catch (error) {
//       console.error("Login Error:", error);
//     }
//   };

//   return (
//     <ModalWithForm title="Login" isOpen={isOpen} onClose={onClose}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </ModalWithForm>
//   );
// };

// export default LoginModal;

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWIthForm";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <ModalWithForm
      title="Login"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Login"}
      onSubmit={handleSubmit}
    >
      {/* <form onSubmit={handleSubmit}> */}
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
      {/* </form> */}
    </ModalWithForm>
  );
};

export default LoginModal;

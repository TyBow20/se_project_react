// import React, { useState, useContext } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import CurrentUserContext from "../../contexts/CurrentUserContext";
// import { updateUserProfile } from "../../utils/api";

// const EditProfileModal = ({ isOpen, onClose, onSubmit }) => {
//   const currentUser = useContext(CurrentUserContext);
//   const [name, setName] = useState(currentUser?.name);
//   const [avatar, setAvatar] = useState(currentUser?.avatar);

//   //new code

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await updateUserProfile({ name, avatar });
//       onSubmit(user);
//       onClose();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <ModalWithForm isOpen={isOpen} onClose={onClose} title="Edit Profile">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Avatar URL"
//           value={avatar}
//           onChange={(e) => setAvatar(e.target.value)}
//         />
//         <button type="submit">Save</button>
//       </form>
//     </ModalWithForm>
//   );
// };

// export default EditProfileModal;

import React, { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { updateUserProfile } from "../../utils/api";

const EditProfileModal = ({
  isOpen,
  onClose,
  onUpdateUser,
  setCurrentUser,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser && isOpen) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [currentUser, isOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const updatedUser = await updateUserProfile({ name, avatar }, token);

      setCurrentUser(updatedUser);
      onClose(); // Close the modal
    } catch (error) {
      console.error("Failed to update user profile:", error);
    }
  };

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title="Edit Profile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
        <button type="submit">Save changes</button>
      </form>
    </ModalWithForm>
  );
};

export default EditProfileModal;

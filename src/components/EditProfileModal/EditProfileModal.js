import React, { useState, useContext } from "react";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose }) => {
  const currentUser = useContext(CurrentUserContext);
  const [username, setUsername] = useState(currentUser?.username);
  const [avatar, setAvatar] = useState(currentUser?.avatar);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make API call to update the user's profile
    // updateUserProfile({ username, avatar }).then(...);
  };

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title="Edit Profile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </ModalWithForm>
  );
};

export default EditProfileModal;

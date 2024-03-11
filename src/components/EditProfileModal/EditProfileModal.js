import React, { useState, useContext } from "react";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { updateUserProfile } from "../../utils/auth";

const EditProfileModal = ({ isOpen, onClose }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name);
  const [avatar, setAvatar] = useState(currentUser?.avatar);

  //new code

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("jwt");
    try {
      const updatedUser = await updateUserProfile({ name, avatar }, token);
      onUpdateUser(updatedUser);
      onClose();
    } catch (error) {
      console.error(error);
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

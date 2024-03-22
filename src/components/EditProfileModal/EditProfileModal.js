import React, { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./EditProfileModal.css";

const EditProfileModal = ({
  isOpen,
  onClose,
  onUpdateUser,
  buttonText = "Save changes",
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

    onUpdateUser({ name, avatar });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Edit Profile"
    >
      <label htmlFor="name-input" className="edit__profile-label">
        Name *
        <input
          id="name-input"
          className="edit__profile-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label htmlFor="avatar-input" className="edit__profile-label">
        Avatar *
        <input
          id="avatar-input"
          className="edit__profile-avatar"
          type="text"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </label>

      <button className="edit__profile-button" type="submit">
        {buttonText}
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;

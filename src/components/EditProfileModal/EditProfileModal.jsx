import "./EditProfileModal.css";
import React, { useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

const EditProfileModal = ({ isOpen, onUpdateUser, onClose }) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-profile"
    >
      <label className="modal__label">
        Name
        <input
          name="name"
          type="text"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
        />
      </label>
      <label className="modal__label">
        Avatar Image
        <input
          name="avatar"
          type="url"
          className="modal__input"
          value={values.avatar}
          onChange={handleChange}
          placeholder="Avatar URL"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;

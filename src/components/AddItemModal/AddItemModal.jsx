import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

const defaultValues = {
  name: "",
  imageUrl: "",
  weather: "",
};

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Add garment"
      disabled={!isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className={`modal__input ${
            errors.name ? "modal__input_type_error" : ""
          }`}
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
          minLength="1"
          maxLength="30"
        />
        <span className="modal__error">{errors.name}</span>
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          className={`modal__input ${
            errors.imageUrl ? "modal__input_type_error" : ""
          }`}
          id="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.imageUrl}</span>
      </label>

      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weather"
            value="hot"
            className="modal__radio-input"
            onChange={handleChange}
            checked={values.weather === "hot"}
            required
          />
          <span className="modal__radio-text">Hot</span>
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weather"
            value="warm"
            className="modal__radio-input"
            onChange={handleChange}
            checked={values.weather === "warm"}
          />
          <span className="modal__radio-text">Warm</span>
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weather"
            value="cold"
            className="modal__radio-input"
            onChange={handleChange}
            checked={values.weather === "cold"}
          />
          <span className="modal__radio-text">Cold</span>
        </label>
        <span className="modal__error">{errors.weather}</span>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;

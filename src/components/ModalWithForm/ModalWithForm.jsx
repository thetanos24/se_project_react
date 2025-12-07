import closeButton from "../../images/closebutton.svg";
import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__opened"}`}
    >
      <div className="modal__content">
        <p className="modal__title">{title}</p>
        <button onClick={onClose} type="button" className="modal__close-btn">
          <img
            src={closeButton}
            alt="Close Button"
            className="modal__close-btn-img"
          />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

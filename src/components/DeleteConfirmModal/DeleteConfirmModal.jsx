import "./DeleteConfirmModal.css";
import closeButton from "../../images/closebutton.svg";

function DeleteConfirmModal({ isOpen, onClose, onConfirm }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal__opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_confirm">
        <button onClick={onClose} className="modal__close-btn" type="button">
          <img
            src={closeButton}
            alt="Close button"
            className="modal__close-btn-img"
          />
        </button>

        <div className="modal__confirm-container">
          <p className="modal__confirm-text">
            Are you sure you want to delete this item?
            <br />
            This action is irreversible.
          </p>
          <button
            onClick={onConfirm}
            className="modal__confirm-btn modal__confirm-btn_type_delete"
            type="button"
          >
            Yes, delete item
          </button>
          <button
            onClick={onClose}
            className="modal__confirm-btn modal__confirm-btn_type_cancel"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;

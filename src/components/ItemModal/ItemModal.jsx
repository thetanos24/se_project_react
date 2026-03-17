import "./ItemModal.css";
import previewCloseButton from "../../images/modalimagepreviewclose.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, card, onClose, name, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser?._id;
  const itemDeleteButtonClassName = `modal__delete-btn ${
    isOwn ? "modal__delete-btn_visible" : "modal__delete-btn_hidden"
  }`;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal__opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <button onClick={onClose} type="button" className="modal__close-btn">
          <img
            src={previewCloseButton}
            alt="Close Button"
            className="modal__close-btn-img"
          />
        </button>
        <div className="modal__footer">
          <div className="modal__description">
            <div className="modal__header-row">
              <p className="modal__caption">{card.name}</p>
              <button
                type="button"
                className={itemDeleteButtonClassName}
                onClick={() => onDelete(card)}
              >
                Delete item
              </button>
            </div>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

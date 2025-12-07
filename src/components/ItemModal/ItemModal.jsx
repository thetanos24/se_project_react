import "./ItemModal.css";
import previewCloseButton from "../../images/modalimagepreviewclose.svg";

function ItemModal({ activeModal, card, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <img src={card.link} alt="" className="modal__image" />
        <button onClick={onClose} type="button" className="modal__close-btn">
          <img
            src={previewCloseButton}
            alt="Close Button"
            className="modal__close-btn-img"
          />
        </button>
        <div className="modal__footer">
          <p className="modal__caption">{card.name}</p>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

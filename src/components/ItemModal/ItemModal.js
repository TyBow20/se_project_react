import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" type="button" onClick={onClose}>
          {/* <img className="modal__card_x" src="./images/Union.svg" /> */}
        </button>
        <img
          className="modal__card_image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__description">
          <div>{selectedCard.name}</div>
          <div>Weather: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

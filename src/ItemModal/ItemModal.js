import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          <img className="modal__card_x" />
        </button>
        <img className="modal__card_image" src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>weather type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;

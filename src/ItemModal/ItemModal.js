const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          close
        </button>
        <img src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>weather type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;

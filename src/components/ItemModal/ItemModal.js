import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  //new code
  const handleDelete = () => {
    onDelete(selectedCard._id);
    onClose();
  };
  //end new code, onDelete was also added
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" type="button" onClick={onClose}>
          {/* <img className="modal__card_x" src="./images/Union.svg" /> */}
        </button>
        <img
          className="modal__card_image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__description">
          <div>{selectedCard.name}</div>
          <div>Weather: {selectedCard.weather}</div>
        </div>
        {/* new code */}
        <button className="modal__delete" type="button" onClick={handleDelete}>
          Delete item
        </button>
        {/* end new code */}
      </div>
    </div>
  );
};

export default ItemModal;

//new code to add to App.js

// const handleDeleteItem = (itemId) => {
// Logic to delete the item from your state or backend
// setItems((currentItems) => currentItems.filter(item => item.id !== itemId));

// return (
// <ItemModal
//   selectedCard={selectedCard}
//   onClose={handleCloseModal}
//   onDelete={handleDeleteItem}
// />

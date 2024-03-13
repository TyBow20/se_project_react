// import React, { useContext } from 'react';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
// import "./ItemModal.css";

// const ItemModal = ({ selectedCard, onClose, onDelete }) => {
//   //new code
//   const handleDelete = () => {
//     onDelete(selectedCard._id);
//   };
//   //end new code, onDelete was also added
//   return (
//     <div className={`modal`}>
//       <div className="modal__content modal__content_type_image">
//         <button className="modal__close" type="button" onClick={onClose}>
//           {/* <img className="modal__card_x" src="./images/Union.svg" /> */}
//         </button>
//         <img
//           className="modal__card_image"
//           src={selectedCard.imageUrl}
//           alt={selectedCard.name}
//         />
//         <div className="modal__description">
//           <div>{selectedCard.name}</div>
//           <div>Weather: {selectedCard.weather}</div>
//         </div>
//         {/* new code */}
//         <button className="modal__delete" type="button" onClick={handleDelete}>
//           Delete item
//         </button>
//         {/* end new code */}
//       </div>
//     </div>
//   );
// };

// export default ItemModal;

//refactored code
import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = currentUser && selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  const handleDelete = () => {
    onDelete(selectedCard._id);
  };

  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_type_image">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__card_image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__combo">
          <div className="modal__description">
            <div>{selectedCard.name}</div>
            <div>Weather: {selectedCard.weather}</div>
          </div>
          {isOwn && (
            <button
              className={itemDeleteButtonClassName}
              type="button"
              onClick={handleDelete}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

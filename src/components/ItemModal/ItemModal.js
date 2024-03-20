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
// import React, { useContext } from "react";
// import CurrentUserContext from "../../contexts/CurrentUserContext";
// import "./ItemModal.css";

// const ItemModal = ({ selectedCard, onClose, onDelete }) => {
//   const currentUser = useContext(CurrentUserContext);

//   const isOwn = currentUser && selectedCard.owner === currentUser._id;

//   const itemDeleteButtonClassName = `item__delete-button ${
//     isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
//   }`;

//   const handleDelete = () => {
//     onDelete(selectedCard._id);
//   };

//   return (
//     <div className={`modal`}>
//       <div className="modal__content modal__content_type_image">
//         <button
//           className="modal__close"
//           type="button"
//           onClick={onClose}
//         ></button>
//         <img
//           className="modal__card_image"
//           src={selectedCard.imageUrl}
//           alt={selectedCard.name}
//         />
//         <div className="modal__combo">
//           <div className="modal__description">
//             <div>{selectedCard.name}</div>
//             <div>Weather: {selectedCard.weather}</div>
//           </div>
//           {isOwn && (
//             <button
//               className={itemDeleteButtonClassName}
//               type="button"
//               onClick={handleDelete}
//             >
//               Delete item
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemModal;

import React, { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => (
  <div className="confirm__modal">
    <button
      className="confirm__modal_close"
      type="button"
      onClick={onCancel}
    ></button>
    <p className="confrim__modal-text">
      Are you sure you want to delete this item? This action is irreversible.
    </p>
    <button
      className="confirm__modal-button confirm__modal-button_delete"
      onClick={onConfirm}
    >
      Yes, delete item
    </button>
    <button className="confirm__modal-button" onClick={onCancel}>
      Cancel
    </button>
  </div>
);

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const isOwn = currentUser && selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  const handleDeleteClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedCard._id);
    setIsConfirmModalOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
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
              onClick={handleDeleteClick}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
      {isConfirmModalOpen && (
        <ConfirmDeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCloseConfirmModal}
        />
      )}
    </div>
  );
};

export default ItemModal;

// import "./ItemCard.css";

// const ItemCard = ({ item, onSelectedCard }) => {
//   return (
//     <div className="card__container" onClick={() => onSelectedCard(item)}>
//       <div className="card__name">{item.name}</div>
//       <div>
//         <img src={item.imageUrl} className="card__image" alt={item.name} />
//       </div>
//     </div>
//   );
// };

// export default ItemCard;

//refactor item card

import React, { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext"; // Import the context

const ItemCard = ({ item, onSelectedCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext); // Use the context to get the current user

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Stop the click from propagating to the card container
    onCardLike({ id: item._id, isLiked: !isLiked });
  };

  // Check if the item was liked by the current user
  const isLiked =
    currentUser && item.likes.some((id) => id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`; // Adjust the class names as needed

  return (
    <div className="card__container" onClick={() => onSelectedCard(item)}>
      <div className="card__name">{item.name}</div>
      <div>
        <img src={item.imageUrl} className="card__image" alt={item.name} />
      </div>
      {currentUser && ( // Only render the like button if there is a logged-in user
        <button className={itemLikeButtonClassName} onClick={handleLikeClick}>
          {/* Replace with a like icon or change as needed */}
          Like
        </button>
      )}
    </div>
  );
};

export default ItemCard;

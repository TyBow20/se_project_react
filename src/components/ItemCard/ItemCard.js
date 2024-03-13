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

// import React, { useContext } from "react";
// import "./ItemCard.css";
// import heartIcon from "../../images/heart.svg";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

// const ItemCard = ({ item, onSelectedCard, onCardLike }) => {
//   const currentUser = useContext(CurrentUserContext);

//   const handleLikeClick = (e) => {
//     e.stopPropagation();
//     onCardLike({ id: item._id, isLiked: !isLiked });
//   };

//   const isLiked =
//     currentUser && item.likes.some((id) => id === currentUser._id);

//   const itemLikeButtonClassName = `card__like-button ${
//     isLiked ? "card__like-button_active" : ""
//   }`;

//   return (
//     <div className="card__container" onClick={() => onSelectedCard(item)}>
//       <div className="card__name">{item.name}</div>
//       <div>
//         <img src={item.imageUrl} className="card__image" alt={item.name} />
//       </div>
//       {currentUser && (
//         <button className={itemLikeButtonClassName} onClick={handleLikeClick}>
//           {/* Replace with a like icon or change as needed */}
//           Like
//         </button>
//       )}
//     </div>
//   );
// };

// export default ItemCard;

// import React, { useContext } from "react";
// import "./ItemCard.css";
// import heartIcon from "../../images/heart.svg"; // Import the heart SVG
// import CurrentUserContext from "../../contexts/CurrentUserContext";

// const ItemCard = ({ item, onSelectedCard, onCardLike }) => {
//   const currentUser = useContext(CurrentUserContext);

//   const handleLikeClick = (e) => {
//     e.stopPropagation();
//     const isLiked =
//       currentUser && item.likes.some((id) => id === currentUser._id);
//     onCardLike({ id: item._id, isLiked: !isLiked });
//   };

//   const isLiked =
//     currentUser && item.likes.some((id) => id === currentUser._id);

//   const itemLikeButtonClassName = `card__like-button ${
//     isLiked ? "card__like-button_active" : ""
//   }`;

//   return (
//     <div className="card__container" onClick={() => onSelectedCard(item)}>
//       <div className="card__details">
//         <div className="card__name">{item.name}</div>
//         {currentUser && (
//           <button className={itemLikeButtonClassName} onClick={handleLikeClick}>
//             <img
//               src={heartIcon}
//               alt={isLiked ? "Liked" : "Not liked"}
//               className="card__like-icon"
//             />
//           </button>
//         )}
//       </div>
//       <img src={item.imageUrl} className="card__image" alt={item.name} />
//     </div>
//   );
// };

// export default ItemCard;

import React, { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import heartIcon from "../../images/heart.svg";
import likedHeartIcon from "../../images/likedheart.svg";

const ItemCard = ({ item, onSelectedCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    const isLiked = item.likes && item.likes.includes(currentUser?._id);
    onCardLike({ id: item._id, isLiked: !isLiked });
  };

  const isLiked = item.likes && item.likes.includes(currentUser?._id);

  return (
    <div className="card__container" onClick={() => onSelectedCard(item)}>
      <div className="card__info">
        <span className="card__name">{item.name}</span>
        {currentUser && (
          <img
            src={isLiked ? likedHeartIcon : heartIcon}
            alt="Like"
            className={`card__like ${isLiked ? "card__like_active" : ""}`}
            onClick={handleLikeClick}
          />
        )}
      </div>
      <img src={item.imageUrl} className="card__image" alt={item.name} />
    </div>
  );
};

export default ItemCard;

//refactored code

import React, { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  clothingItems,
  onSelectedCard,
  onAddNewItem,
  onCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes">
      <section className="card__section" id="card-section">
        <div className="clothes__items">
          Your items
          <button className="card__button" onClick={onAddNewItem}>
            + Add new
          </button>
        </div>
        <div className="card__items">
          {userItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectedCard={onSelectedCard}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClothesSection;

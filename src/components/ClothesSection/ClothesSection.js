import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({ clothingItems, onSelectedCard, onAddNewItem }) => {
  console.log(clothingItems);
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
          {clothingItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectedCard={onSelectedCard}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClothesSection;

import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = () => {
  return (
    <div className="clothes">
      <section className="card__section" id="card-section">
        Your items + Add New
        {/* <div className="card__items">
          <ItemCard
          // key={item._id}
          // item={item}
          // onSelectedCard={onSelectedCard}
          />
        </div> */}
      </section>
    </div>
  );
};

export default ClothesSection;

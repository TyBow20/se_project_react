import "./ItemCard.css";

const ItemCard = ({ item, onSelectedCard }) => {
  return (
    <div className="card__container" onClick={() => onSelectedCard(item)}>
      <div className="card__name">{item.name}</div>
      <div>
        <img src={item.link} className="card__image" alt={item.name} />
      </div>
    </div>
  );
};

export default ItemCard;

import "./ItemCard.css";

const ItemCard = ({ item, onSelectedCard }) => {
  return (
    <div>
      <div>
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectedCard(item)}
        />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;

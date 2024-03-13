// import SideBar from "../SideBar/SideBar";
// import ClothesSection from "../ClothesSection/ClothesSection";
// import "./Profile.css";

// const Profile = ({ clothingItems, onSelectedCard, onAddNewItem }) => {
//   return (
//     <div className="profile">
//       <SideBar />
//       <ClothesSection
//         clothingItems={clothingItems}
//         onSelectedCard={onSelectedCard}
//         onAddNewItem={onAddNewItem}
//       />
//     </div>
//   );
// };

// export default Profile;

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  clothingItems,
  onSelectedCard,
  onAddNewItem,
  onSignOut,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <SideBar onSignOut={onSignOut} />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectedCard={onSelectedCard}
        onAddNewItem={onAddNewItem}
        onCardLike={onCardLike}
      />
    </div>
  );
};

export default Profile;

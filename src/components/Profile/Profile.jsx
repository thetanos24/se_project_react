import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  handleCardClick,
  handleAddClick,
  currentUser,
  handleLogout,
  onCardLike,
  onEditProfile,
}) {
  return (
    <section className="profile">
      <SideBar
        currentUser={currentUser}
        handleLogout={handleLogout}
        onEditProfile={onEditProfile}
      />
      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        currentUser={currentUser}
        onCardLike={onCardLike}
      />
    </section>
  );
}

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
  const userItems = clothingItems.filter((item) => {
    return item.owner === currentUser?.id;
  });

  return (
    <section className="profile">
      <SideBar
        currentUser={currentUser}
        handleLogout={handleLogout}
        onEditProfile={onEditProfile}
      />
      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={userItems}
        handleAddClick={handleAddClick}
        currentUser={currentUser}
        onCardLike={onCardLike}
      />
    </section>
  );
}

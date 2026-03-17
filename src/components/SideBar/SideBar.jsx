import "./SideBar.css";

export default function SideBar({ currentUser, handleLogout, onEditProfile }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <img
          src={currentUser?.avatar}
          alt={currentUser?.name || "User avatar"}
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>

      <div className="sidebar__controls">
        <button
          className="sidebar__edit-btn"
          type="button"
          onClick={onEditProfile}
        >
          Edit Profile
        </button>

        <button
          className="sidebar__logout-btn"
          type="button"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </aside>
  );
}

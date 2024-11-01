import { useState } from "react";

export function UserProfile({ profile, isEditing, onSave, onEdit }) {
  const [formProfile, setFormProfile] = useState(profile);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  }

  return (
    <div>
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formProfile); // Formu kaydet ve App'deki userProfile'ı güncelle
          }}
        >
          <input
            type="text"
            name="name"
            value={formProfile.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="biography"
            value={formProfile.biography}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <img src={profile.image} alt={profile.name}></img>
          <h3>{profile.name}</h3>
          <h4>{profile.biography}</h4>
          <button onClick={onEdit}>Edit Profile</button>
        </>
      )}
    </div>
  );
}

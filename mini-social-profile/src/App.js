import { useState } from "react";
import { UserProfile } from "./components/UserProfile";
import { FriendsList } from "./components/FriendsList";
import { FormAddFriend } from "./components/FormAddFriend";

const InitialProfile = {
  image: "https://i.pravatar.cc/48?u=933372",
  name: "Nur",
  biography: "Frontend Developer",
};

const InitialFriends = [
  {
    id: 1,
    image: "https://i.pravatar.cc/48?u=933372",
    name: "Umut",
  },
];

export default function App() {
  const [userProfile, setUserProfile] = useState(InitialProfile);
  const [friends, setFriends] = useState(InitialFriends);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditProfile() {
    setIsEditing(true);
  }

  function handleProfileUpdate(updatedProfile) {
    setUserProfile(updatedProfile);
    setIsEditing(false);
  }

  function handleAddFriend(newFriend) {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  }

  return (
    <div>
      <UserProfile
        profile={userProfile}
        isEditing={isEditing}
        onEdit={handleEditProfile}
        onSave={handleProfileUpdate}
      />
      <FriendsList friends={friends} />
      <FormAddFriend onAddFriend={handleAddFriend} />
    </div>
  );
}

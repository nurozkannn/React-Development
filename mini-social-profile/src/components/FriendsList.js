import { useState } from "react";

export function FriendsList({ friends, onAddFriend }) {
  const [showFriends, setShowFriends] = useState(false);

  function handleToggleShow() {
    setShowFriends((show) => !show);
  }
  return (
    <div onClick={handleToggleShow}>
      <h2>
        Friends {showFriends ? "▼" : "▶"} ({friends.length})
      </h2>
      {showFriends && (
        <ul>
          {friends.map((friend) => (
            <Friend
              friend={friend}
              key={friend.id}
              handleAddFriend={() => onAddFriend(friend)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function Friend({ friend, handleAddFriend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
    </li>
  );
}

export function FriendsList({ friends, onAddFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleAddFriend={() => onAddFriend(friend)}
        />
      ))}
    </ul>
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

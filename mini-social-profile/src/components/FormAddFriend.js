import { useState } from "react";

export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      setError("You have to enter username");
      return;
    }

    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image: image || `https://i.pravatar.cc/48?u=${crypto.randomUUID()}`,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("");
    setError("");
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <>
      <button onClick={handleShowAddFriend}>More Friends</button>
      {showAddFriend && (
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="text"
            placeholder="Friend's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Add Friend</button>
        </form>
      )}
    </>
  );
}

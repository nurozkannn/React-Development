import { useState } from "react";

export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image: image || `https://i.pravatar.cc/48?u=${crypto.randomUUID()}`,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("");
  }
  return (
    <form onSubmit={handleSubmit}>
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
  );
}

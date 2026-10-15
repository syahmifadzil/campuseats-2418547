import React, { useState } from "react";

function MenuItemCard({ item, onAdd }) {
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState("");

  if (!item) return null;

  return (
    <div className="card">
      <span className="tag">{item.category}</span>

      <div className="thumb">
        {item.name ? item.name.charAt(0) : ""}
      </div>

      <h2>{item.name}</h2>
      <p className="muted">{item.description}</p>

      <p className="price">
        RM {item.price ? item.price.toFixed(2) : "0.00"}
      </p>

      {/* Add Note Button */}
      <button
        className="btn note-btn"
        onClick={() => setShowNote(!showNote)}
      >
        {showNote ? "Hide note" : "Add note"}
      </button>

      {/* Note Textarea */}
      {showNote && (
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="E.g. No spicy sauce, less sugar..."
          rows="3"
        />
      )}

      {/* Add to Cart Button */}
      <button
        className="btn cart-btn"
        disabled={!item.available}
        onClick={() => onAdd({ ...item, note: note.trim() })}
      >
        {item.available ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
}

export default MenuItemCard;
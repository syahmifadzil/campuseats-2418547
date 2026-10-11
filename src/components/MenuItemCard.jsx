
import React from "react";

function MenuItemCard() {
  const item = {
    name: "Nasi Lemak",
    description: "Coconut rice served with sambal, egg and peanuts.",
    price: 7.5,
    available: true,
  };

  return (
    <div className="menu-item-card">
      <h2>{item.name}</h2>

      <p>{item.description}</p>

      <p>RM {item.price.toFixed(2)}</p>

      <button className="btn" disabled={!item.available}>
        {item.available ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
}

export default MenuItemCard;

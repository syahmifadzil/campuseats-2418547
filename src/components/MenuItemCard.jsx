import React from "react";

function MenuItemCard({ item, onAdd }) {
  if (!item) return null;

  return (
    <div className="card">
      <span className="tag">{item.category}</span>

      <div className="thumb">
        {item.name ? item.name.charAt(0) : ""}
      </div>

      <h2>{item.name}</h2>
      <p className="muted">{item.description}</p>
      <p className="price">RM {item.price ? item.price.toFixed(2) : "0.00"}</p>

      <button 
        className="btn" 
        disabled={!item.available}
        onClick={() => onAdd(item)}
      >
        {item.available ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
}

export default MenuItemCard;
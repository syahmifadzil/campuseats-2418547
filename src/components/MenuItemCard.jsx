import React from "react";

function MenuItemCard({ name, description, price, available }) {
  return (
    <div className="card">
      <div className="thumb">
        {name.charAt(0)}
      </div>

      <h2>{name}</h2>
      <p className="muted">{description}</p>
      <p className="price">RM {price.toFixed(2)}</p>

      <button className="btn" disabled={!available}>
        {available ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
}

export default MenuItemCard;
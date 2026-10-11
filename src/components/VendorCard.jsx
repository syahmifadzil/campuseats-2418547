import React from "react";

function VendorCard({ vendor, isSelected, onSelect }) {
  return (
    <button 
      type="button" 
      className={`card vendor-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(vendor.id)}
    >
      <div className="thumb">
        {vendor.name.charAt(0)}
      </div>

      <div className="vendor-info">
        <h3>{vendor.name}</h3>
        <p className="muted">{vendor.location}</p>
        <p className="muted">{vendor.openHours}</p>

        <span className={vendor.isOpen ? "status open" : "status closed"}>
          {vendor.isOpen ? "Open now" : "Closed"}
        </span>
      </div>
    </button>
  );
}

export default VendorCard;
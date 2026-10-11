
import React from "react";

function VendorCard() {
  const vendor = {
    name: "Mahallah Cafe",
    location: "Your Mahallah, IIUM Gombak",
    openHours: "8:00 AM - 10:00 PM",
    isOpen: true,
  };

  return (
    <div className="vendor-card">
      <div className="thumb">
        {vendor.name.charAt(0)}
      </div>

      <div className="vendor-info">
        <h2>{vendor.name}</h2>
        <p>{vendor.location}</p>
        <p>{vendor.openHours}</p>

        <span className={vendor.isOpen ? "status open" : "status closed"}>
          {vendor.isOpen ? "Open now" : "Closed"}
        </span>
      </div>
    </div>
  );
}

export default VendorCard;

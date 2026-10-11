import React from "react";

function VendorCard() {
  const vendor = {
    name: "Kafe Mahallah Ali",
    location: "Mahallah Ali, Block C",
    openHours: "Open: 7:00 am - 10:00 pm",
    isOpen: true,
  };

  return (
    <div className="card vendor-card">
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
    </div>
  );
}

export default VendorCard;
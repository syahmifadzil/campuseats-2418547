import React, { useState } from "react";
import Header from "./components/Header";
import VendorCard from "./components/VendorCard";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";
import vendors from "./data/vendors";

function App() {
  // State for the selected vendor and shopping cart
  const [selectedVendorId, setSelectedVendorId] = useState(
    vendors[0].id
  );

  const [cart, setCart] = useState([]);

  // Find the selected vendor
  const selectedVendor = vendors.find(
    (vendor) => vendor.id === selectedVendorId
  );

  // Add an item to the cart
  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <>
      <Header cartCount={cart.length} />

      <main className="container">
        {/* Today's vendors */}
        <section>
          <h2>Today’s vendors</h2>

          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={
                  vendor.id === selectedVendorId
                }
                onSelect={setSelectedVendorId}
              />
            ))}
          </div>
        </section>

        {/* Selected vendor's menu */}
        <section>
          <h2 className="section-title">
            Menu: {selectedVendor?.name || ""}
          </h2>

          <MenuList
            items={selectedVendor?.menu || []}
            onAdd={handleAddToCart}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
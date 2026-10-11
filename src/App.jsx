import React, { useState } from "react";
import Header from "./components/Header";
import VendorCard from "./components/VendorCard";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";

function App() {
  // Contoh data vendors
  const vendors = [
    { 
      id: 1, 
      name: "Kafe Mahallah Ali", 
      location: "Mahallah Ali, Block C", 
      openHours: "Open: 7:00 am - 10:00 pm", 
      isOpen: true,
      menu: [
        { id: 101, category: "Mains", name: "Nasi Lemak Ayam", description: "Coconut rice, fried chicken, sambal, egg and peanuts.", price: 7.5, available: true },
        { id: 102, category: "Drinks", name: "Teh Tarik", description: "Pulled milk tea", price: 2.5, available: false }
      ]
    },
    { 
      id: 2, 
      name: "Kafe Mahallah Siddiq", 
      location: "Mahallah Siddiq, Level 1", 
      openHours: "Open: 8:00 am - 9:00 pm", 
      isOpen: true,
      menu: [
        { id: 201, category: "Mains", name: "Mee Goreng", description: "Stir-fried noodles with vegetables and eggs.", price: 6.0, available: true }
      ]
    },
  ];

  // State untuk vendor yang dipilih dan troli
  const [selectedVendorId, setSelectedVendorId] = useState(vendors[0].id);
  const [cart, setCart] = useState([]);

  // Cari vendor yang dipilih menggunakan .find() (derived value)
  const selectedVendor = vendors.find((v) => v.id === selectedVendorId);

  // Fungsi untuk menambah item ke troli tanpa menggunakan push
  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <>
      <Header cartCount={cart.length} />

      <main className="container">
        <section>
          <h2>Today’s vendors</h2>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard 
                key={vendor.id} 
                vendor={vendor} 
                isSelected={vendor.id === selectedVendorId} 
                onSelect={setSelectedVendorId} 
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">
            Menu: {selectedVendor ? selectedVendor.name : ""}
          </h2>
          <MenuList 
            items={selectedVendor ? selectedVendor.menu : []} 
            onAdd={handleAddToCart} 
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
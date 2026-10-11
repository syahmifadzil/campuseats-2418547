import React from "react";
import Header from "./components/Header";
import VendorCard from "./components/VendorCard";
import MenuItemCard from "./components/MenuItemCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <section>
          <h2>Today’s vendors</h2>
          <VendorCard />
        </section>

        <section>
          <h2 className="section-title">Popular items</h2>
          <div className="grid">
            <MenuItemCard 
                name="Teh Tarik" 
                description="Pulled milk tea" 
                price={2.5} 
                available={false} 
              />
              <MenuItemCard 
                name="Nasi lemak" 
                description="coconut rice" 
                price={4.5} 
                available={true} 
              /> 
              <MenuItemCard 
                name="Roti canai" 
                description="pull bread" 
                price={1.5} 
                available={true} 
              />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
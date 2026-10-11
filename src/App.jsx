
import React from "react";
import Header from "./components/Header";
import VendorCard from "./components/VendorCard";
import MenuItemCard from "./components/MenuItemCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h2>Today’s vendors</h2>
          <VendorCard />
        </section>

        <section>
          <h2>Popular items</h2>
          <div className="grid">
            <MenuItemCard />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;

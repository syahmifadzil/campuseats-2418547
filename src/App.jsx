
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import VendorCard from "./components/VendorCard";
import MenuList from "./components/MenuList";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";

function Loading() {
  return <p>Loading vendors...</p>;
}

function ErrorMessage({ message, onRetry }) {
  return (
    <div>
      <p>{message}</p>
      <button type="button" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}

function App() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("menu");
  const [lastOrder, setOrderDetails] = useState(null);

  // Fetch vendors from JSON
  useEffect(() => {
    const controller = new AbortController();

    async function fetchVendors() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/vendors.json", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Failed to load vendors.");
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid vendors data.");
        }

        setVendors(data);
        setSelectedVendorId(data.length > 0 ? data[0].id : null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
          setVendors([]);
          setSelectedVendorId(null);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchVendors();

    return () => controller.abort();
  }, [reloadKey]);

  // Find the selected vendor
  const selectedVendor = vendors.find(
    (vendor) => vendor.id === selectedVendorId
  );

  // Total quantity of all items in the cart
  const cartCount = cart.reduce(
    (total, line) => total + line.qty,
    0
  );

  // Calculate the cart total
  const cartTotal = cart.reduce(
    (total, line) => total + line.item.price * line.qty,
    0
  );

  // Add an item or increase its quantity
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existingLine = prev.find(
        (line) => line.item.id === item.id
      );

      if (existingLine) {
        return prev.map((line) =>
          line.item.id === item.id
            ? { ...line, qty: line.qty + 1 }
            : line
        );
      }

      return [...prev, { item, qty: 1 }];
    });
  };

  // Change quantity; remove the item if quantity reaches zero
  const handleChangeQty = (itemId, delta) => {
    setCart((prev) =>
      prev
        .map((line) =>
          line.item.id === itemId
            ? { ...line, qty: line.qty + delta }
            : line
        )
        .filter((line) => line.qty > 0)
    );
  };

  // Remove an item from the cart
  const handleRemove = (itemId) => {
    setCart((prev) =>
      prev.filter((line) => line.item.id !== itemId)
    );
  };

  // Place a demo order
const handlePlaceOrder = (details) => {
  if (cart.length === 0) return;

  const total = cart.reduce(
    (sum, line) => sum + line.item.price * line.qty,
    0
  );

  setLastOrder({
    ...details,
    total,
  });

  setCart([]);
  setView("done");
};

  // Choose what to display based on the current view
  let content;

  if (view === "cart") {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    );
  } else if (view === "done") {
    content = (
      <section>
        <h2>Order placed!</h2>
        <p>Thank you for ordering from CampusEats.</p>

        {lastOrder && (
        <>
        <p>Pickup time: {lastOrder.pickupTime}</p>
        <p>Order total: RM {lastOrder.total.toFixed(2)}</p>
        </>
        )}

        <button
          type="button"
          onClick={() => setView("menu")}
        >
          Back to Vendors
        </button>
      </section>
    );
  } else if (loading) {
    content = <Loading />;
  } else if (error) {
    content = (
      <ErrorMessage
        message={error}
        onRetry={() => setReloadKey((key) => key + 1)}
      />
    );
  } else {
    content = (
      <>
        <section>
          <h2>Today's vendors</h2>

          {vendors.length === 0 ? (
            <p>No vendors available.</p>
          ) : (
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
          )}
        </section>

        {selectedVendor && (
          <section>
            <h2 className="section-title">
              Menu: {selectedVendor.name}
            </h2>

            <MenuList
              items={selectedVendor.menu || []}
              onAdd={handleAddToCart}
            />
          </section>
        )}
      </>
    );
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView("menu")}
        onShowCart={() => setView("cart")}
      />

      <main className="container">{content}</main>

      <Footer />
    </>
  );
}

export default App;

import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { SHOE_LIST } from "./constant";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";
import { Cart } from "./components/Cart";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  );
}

import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { SHOE_LIST } from "./constant";
import { Sidebar } from "./components/Sidebar";
import { useState, useEffect } from "react";
import { Cart } from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");

    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  //  I had to close out of VS Code, reopen it, and npm run dev again to get this to work:
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

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
      <div className="fixed bottom-4 right-4">
        {/* The bg-night-50 from index.css doesn't work, so I'm hardcoding it: */}
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full bg-[#171e2c]  px-4 py-2 text-white shadow-lg dark:bg-white dark:text-[#0d1120]"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

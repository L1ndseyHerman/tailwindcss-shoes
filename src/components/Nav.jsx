import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contacts",
];

export function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] =
    useState(false);

  return (
    <nav className="item-center flex flex-wrap justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger Button (My ring looks way dif than his idk why?) */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="hover:bg-grey-100 focus:ring-grey-200 rounded-lg p-2 focus:ring-2 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div
        className={`${
          isMobileMenuShown === false && "hidden"
        } w-full lg:block lg:w-auto`}
      >
        <ul className="lg:space-8 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:border-none lg:bg-transparent">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                }`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

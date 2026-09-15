import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contacts",
];

export function Nav() {
  return (
    <nav className="item-center flex flex-wrap justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger Button (My ring looks way dif than his idk why?) */}
      <button className="hover:bg-grey-100 focus:ring-grey-200 rounded-lg p-2 focus:ring-2">
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div className="w-full">
        <ul className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 ${
                  i === 0
                    ? "bg-blue-500 text-white"
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
    </nav>
  );
}

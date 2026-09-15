import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

export function Nav() {
  return (
    <nav className="item-center flex justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger Button (My ring looks way dif than his idk why?) */}
      <button className="hover:bg-grey-100 focus:ring-grey-200 rounded-lg p-2 focus:ring-2">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
}

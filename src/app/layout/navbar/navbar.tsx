import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

import DarkModeButton from "@/app/components/darkMode";
import { NavbarLinks } from "@/app/layout/navbar/components/navbarLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container underline-grow">
        {/** Quick fix for github specific bug */}
        <a
          className="logo"
          href="https://ambertrance.github.io/temple-of-medicine"
        >
          Temple of Medicine
        </a>

        <FaLeaf size={20} color="green" />
      </div>

      <div className="f-row">
        <NavbarLinks />

        <DarkModeButton />
      </div>
    </nav>
  );
};

export default Navbar;

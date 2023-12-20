import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

import DarkModeButton from "@/app/components/darkMode";
import { NavbarLinks } from "@/app/layout/navbar/components/navbarLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container underline-grow">
        <Link className="logo " href="/">
          Temple of Medicine
        </Link>

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

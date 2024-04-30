// import Link from "next/link";
import Image from "next/image"

import DarkModeButton from "@/app/components/darkMode";
import { NavbarLinks } from "@/app/layout/navbar/components/navbarLinks";
import { landingPagePath } from "../../../../constants";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container underline-grow">
        {/** Quick fix for github specific bug*/}
        <a
          className="logo"
          href={landingPagePath}
        >
          Temple of Medicine
        </a>

        <Image src="/leaf.png" width={25} height={25} alt="temple"/>
        </div>

      <div className="f-row">
        <NavbarLinks />

        <DarkModeButton />
      </div>
    </nav>
  );
};

export default Navbar;

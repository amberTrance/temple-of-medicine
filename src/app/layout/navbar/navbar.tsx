"use client";
import { usePathname } from "next/navigation";

import DarkModeButton from "@/app/components/darkMode";
import { Mandala } from "@/app/components/mandala/mandala";
import { NavbarLinks } from "@/app/layout/navbar/components/navbarLinks";
import { landingPagePath, prefix } from "../../../../constants";

const Navbar = () => {
  const pathname = usePathname();

  // --- RENDER ---

  return (
    <nav className="navbar">
      <div
        className={`underline-grow ${
          pathname === `${prefix}/` && "underline-grow-stable"
        }`}
      >
        {/** Quick fix for github specific bug*/}
        <a className="logo" href={landingPagePath}>
          Temple of Medicine
          <Mandala size={32} />
        </a>
      </div>

      <div className="f-row">
        <NavbarLinks />

        <DarkModeButton />
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

import styles from "./navbarLinks.module.css";
import { NavbarLinksList } from "@/app/layout/navbar/components/navbarLinksList";

export const NavbarLinksMobileNavigation = () => {
  // --- STATE ---

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // --- RENDER ---

  return (
    <>
      <button
        aria-label="dark/light theme switch"
        className={`circle-button ${styles.button}`}
        onClick={handleClick}
      >
        {isOpen ? (
          <LiaTimesSolid size={25} className={styles.fadeInThemeIcon} />
        ) : (
          <HiBars3 size={25} className={styles.fadeInThemeIcon} />
        )}
      </button>

      {isOpen && (
        <ul className={`${styles.ulContainer} show`}>
          <NavbarLinksList />
        </ul>
      )}
    </>
  );
};

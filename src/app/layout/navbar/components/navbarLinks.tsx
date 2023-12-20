"use client";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

import styles from "./navbarLinks.module.css";

export const NavbarLinks = () => {
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
    <div>
      <button
        aria-label="dark/light theme switch"
        className={`circle-button ${styles.button}`}
        onClick={handleClick}
      >
        {isOpen ? (
          <LiaTimesSolid size={25} className={styles.fadeInSvg} />
        ) : (
          <HiBars3 size={25} className={styles.fadeInSvg} />
        )}
      </button>

      <ul className={`${styles.ulContainer} ${isOpen ? "show" : ""}`}>
        <li className={styles.li}>
          <Link
            className={`${styles.navbarLinks} underline-grow`}
            href="/about"
          >
            Blog
          </Link>
        </li>

        <li className={styles.li}>
          <Link
            className={`${styles.navbarLinks} underline-grow`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

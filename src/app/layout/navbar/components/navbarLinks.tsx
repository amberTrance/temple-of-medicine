import { NavbarLinksList } from "@/app/layout/navbar/components/navbarLinksList";
import { NavbarLinksMobileNavigation } from "@/app/layout/navbar/components/navbarLinksMobileNavigation";

import styles from "./navbarLinks.module.css";

export const NavbarLinks = () => {
  return (
    <>
      <NavbarLinksMobileNavigation />

      <ul className={`${styles.ulContainer}`}>
        <NavbarLinksList />
      </ul>
    </>
  );
};

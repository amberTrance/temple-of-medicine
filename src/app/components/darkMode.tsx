"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      aria-label="dark/light theme switch"
      className="circle-button"
      onClick={(e) => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {mounted ?  theme === "dark" ? <FaMoon size={18} /> : <GoSun size={25} /> : null}
    </button>
  );
};

export default DarkModeButton;

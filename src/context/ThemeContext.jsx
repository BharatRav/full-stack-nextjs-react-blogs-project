"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  //in nextjs it is client side rendering still it render first
  // on server side and their is no window object that's why i hve to add
  //this condition in nextjs . i can ignore this in react
  // if (typeof window !== undefined) {
  //   const value = localStorage.getItem("theme");
  //   return value || "light";
  // }
};
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const TheThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme, toggle);
  return (
    <div
      className={styles.container}
      style={
        theme !== "dark"
          ? {  backgroundColor: "#0f172a" }
          : {  backgroundColor: "white" }
      }
      onClick={toggle}
    >
      <Image src={"/moon.png"} alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={"/sun.png"} alt="" width={14} height={14} />
    </div>
  );
};

export default TheThemeToggle;

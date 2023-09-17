import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Authentication from "../authentication/Authentication";
import TheThemeToggle from "../themeToggle/TheThemeToggle";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>React Blogs</div>
      <div className={styles.links}>
        <TheThemeToggle />
        <Link href={"/"} className={styles.link} >HomePage</Link>
        <Link href={"/"} className={styles.link} >Contact</Link>
        <Link href={"/"} className={styles.link} >About</Link>
        <Authentication />
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import styles from "./authentication.module.css";
import Link from "next/link";

const Authentication = () => {
  const [open, setOpen] = useState(false);
  //temporary
  const status = "Authenticated";
  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href={"/login"} className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href={"/write"} className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>
            HomePage
          </Link>
          <Link href={"/"}>
            Contact
          </Link>
          <Link href={"/"}>
            About
          </Link>
          {status === "notAuthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Write</Link>
              <span className={styles.links}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Authentication;

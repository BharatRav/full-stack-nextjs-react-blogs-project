import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {/* <b>Hey, Bharat Rav here!</b> Discover my stories and creative ideas. */}
        <b>Hey, Bharat Rav here!</b> Discover Rect Blogs with creative ideas...
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/reactLanding2.jpg"} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            This blog is the official source for the updates from the React
            team. Anything important,
          </h1>
          <p className={styles.postDesc}>
            Today, front-end frameworks and libraries are becoming an essential
            part of the modern web development stack. React.js is a front-end
            library that has gradually become the go-to framework for modern web
            development within the JavaScript community.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

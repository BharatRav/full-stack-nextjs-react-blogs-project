import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = () => {
  const getValidFormat = (value) => {
    return (value < 10 ? "0" : "") + value;
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{`${getValidFormat(
            new Date().getDate()
          )}.${getValidFormat(
            new Date().getMonth()
          )}.${new Date().getFullYear()}-`}
          </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href={"/"}>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ab
          sint fugit quia reprehenderit deleniti repellendus delectus, facere
          aspernatur ipsum voluptatibus adipisci libero id fugiat officiis
          perspiciatis voluptatum laudantium omnis?...
        </p>
        <Link href={"/"} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;

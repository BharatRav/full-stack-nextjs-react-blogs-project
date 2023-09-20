import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = ({ key, item }) => {
  const getValidFormat = (value) => {
    return (value < 10 ? "0" : "") + value;
  };
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          {/* <span className={styles.date}>{`${getValidFormat(
            new Date().getDate()
          )}.${getValidFormat(
            new Date().getMonth()
          )}.${new Date().getFullYear()}-`}
          </span> */}
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)}-{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item?.title ? item?.title : "---"}</h1>
        </Link>
        <p className={styles.desc}>
          {item.desc.substring(0, 60)}
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ab
          sint fugit quia reprehenderit deleniti repellendus delectus, facere
          aspernatur ipsum voluptatibus adipisci libero id fugiat officiis
          perspiciatis voluptatum laudantium omnis?... */}
        </p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

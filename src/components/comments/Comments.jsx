import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  const getValidFormat = (value) => {
    return (value < 10 ? "0" : "") + value;
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write  a comment..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Bharat Rav</span>
              <span className={styles.date}>
                {`${getValidFormat(new Date().getDate())}.${getValidFormat(
                  new Date().getMonth()
                )}.${new Date().getFullYear()}`}
              </span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            numquam eveniet culpa debitis ducimus tenetur totam sint! Impedit,
            at odio accusantium, deserunt in nihil blanditiis nobis quas
            praesentium aliquid cupiditate.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Bharat Rav</span>
              <span className={styles.date}>
                {`${getValidFormat(new Date().getDate())}.${getValidFormat(
                  new Date().getMonth()
                )}.${new Date().getFullYear()}`}
              </span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            numquam eveniet culpa debitis ducimus tenetur totam sint! Impedit,
            at odio accusantium, deserunt in nihil blanditiis nobis quas
            praesentium aliquid cupiditate.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Bharat Rav</span>
              <span className={styles.date}>
                {`${getValidFormat(new Date().getDate())}.${getValidFormat(
                  new Date().getMonth()
                )}.${new Date().getFullYear()}`}
              </span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            numquam eveniet culpa debitis ducimus tenetur totam sint! Impedit,
            at odio accusantium, deserunt in nihil blanditiis nobis quas
            praesentium aliquid cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;

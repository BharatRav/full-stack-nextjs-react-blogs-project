import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  const getValidFormat = (value) => {
    return (value < 10 ? "0" : "") + value;
  };
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Bharat Rav</span>
              <span className={styles.date}>
                {`${getValidFormat(new Date().getDate())}.${getValidFormat(
                  new Date().getMonth()
                )}.${new Date().getFullYear()}`}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, libero asperiores numquam esse deleniti adipisci,
              inventore harum totam architecto officiis recusandae nam maiores
              tenetur assumenda sed beatae odit! Qui, labore!
            </p>
            <h2>Lorem ipsum, dolor sit amet</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, libero asperiores numquam esse deleniti adipisci,
              inventore harum totam architecto officiis recusandae nam maiores
              tenetur assumenda sed beatae odit! Qui, labore!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, libero asperiores numquam esse deleniti adipisci,
              inventore harum totam architecto officiis recusandae nam maiores
              tenetur assumenda sed beatae odit! Qui, labore!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, libero asperiores numquam esse deleniti adipisci,
              inventore harum totam architecto officiis recusandae nam maiores
              tenetur assumenda sed beatae odit! Qui, labore!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

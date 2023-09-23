import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const apiURL = process.env.NEXTAUTH_URL
  const res = await fetch(`${apiURL}/api/posts/${slug}}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  const getValidFormat = (value) => {
    return (value < 10 ? "0" : "") + value;
  };
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data?.user?.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name?data?.user?.name:"USERNAME"}</span>
              <span className={styles.date}>
                {`${getValidFormat(new Date().getDate())}.${getValidFormat(
                  new Date().getMonth()
                )}.${new Date().getFullYear()}`}
              </span>
            </div>
          </div>
        </div>
        {data?.img &&<div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          {data?.desc && <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }} //in future i'll be use a react library to secure it
          />}
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

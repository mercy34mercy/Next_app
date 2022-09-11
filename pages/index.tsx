// pages/index.js


import Link from "next/link";
import type { InferGetStaticPropsType, NextPage } from "next";
import { client } from "./libs/client";    // srcから見た絶対パスで指定
import type { Blog } from "./types/blog";    // srcから見た絶対パスで指定
import styles from "../styles/title.module.css"

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blogs" });
  console.log("blog", blog.contents)
  return {
    props: {
      blogs: blog.contents,
    },
  };
};

// Props（blogsとtags）の型
type Props = {
  blogs: Blog[];
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h1>マーシーブログ</h1>
      </div>
      <h1 style={{marginLeft:20}}>記事一覧</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className={styles.title}>
            <div className={styles.box}>
              <Link href={`/blogs/${blog.id}`}>
                <a className={styles.link}>{blog.title}</a>
              </Link>
            </div>
            <div className={styles.topimg}>
              <img className={styles.img} src={blog.eyecatch.url} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

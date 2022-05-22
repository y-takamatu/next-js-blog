import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import {getPostsData}  from '../lib/post';


//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id,title,date,thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
} 
export default function Home( {allPostsData} ) {
  return <Layout>
     <section>
       <p className={utilStyles.headingMd}>
         エンジニア１年目です/駆け出しエンジニアの成長記録を綴っていきます/Next.js学習中です
      </p>
      </section>

      <section className= {`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>駆け出しエンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id,title,date,thumbnail }) => (
           <article key={id}>
           <Link href={`/posts/${id}`}>
             <img src={`${thumbnail}`}
             className={styles.thumbnailImage}
             alt=''/>
           </Link>
           <Link href={`/posts/${id}`}>
             <a className={utilStyles.boldText}>{title}</a>
           </Link>
           <br/>
           <small className={utilStyles.lightText}>{date}</small>
         </article>
        ))}
      </div>
      </section>
  </Layout>;
};
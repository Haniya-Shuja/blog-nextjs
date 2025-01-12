import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import BlogPost from "@/components/blogPost/blogPost";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Vision Hub.</h1>
          <p className={styles.desc}>
          Creative Vision Hub is a dynamic space where innovative ideas and bold concepts come to life. 
          It's a place that fosters collaboration, bringing together creative minds to push the boundaries of 
          imagination and turn visions into reality.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>
              <Link href="/contact">Contact</Link>
            </button>
          </div>
         
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
        </div>
      </div>
      <div className="lg:py-12">
        {/* <BlogPost /> */}
      </div>
    </div>
  );
}

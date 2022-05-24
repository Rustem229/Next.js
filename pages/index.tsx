import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  console.log("home");
  return (
    <div className={styles.container}>
      <Link href="/videos">
        <a>Go to videoz</a>
      </Link>
    </div>
  );
};

export default Home;

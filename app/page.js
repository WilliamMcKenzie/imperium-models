'use client';
import { Person, ShoppingCart, ViewInAr } from "@mui/icons-material";
import styles from "./modulestyle/home.module.css";
import { ModelViewer } from "./components/model_view";

export default function Home() {
  return (<>
    <div className={styles.navbar}>
        <ViewInAr sx={{marginRight:"auto"}}></ViewInAr>
        <Person sx={{marginLeft:"auto"}}></Person>
        <ShoppingCart sx={{marginLeft:"20px"}}></ShoppingCart>
    </div>
    <main className={styles.main}>
      <ModelViewer />
      <div className={styles.center}>
        <h1 className="raleway">IMPERIUM MODELS</h1>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>Only the best.&nbsp;</code>
            Set your server apart with premium assets.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="/furniture"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Browse Assets
          </h2>
          <p>Designed to match vanilla's aesthetic and feeling in a simplified style.</p>
        </a>
      </div>
    </main>
  </>);
}

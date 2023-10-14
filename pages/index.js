import styles from "./index.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <nav className={styles.navbar1}>
          <img className={styles.logotypeIcon}>ROSA</img>
          <div className={styles.links}>
            <div className={styles.elementlink}>
              <div className={styles.linkText}>Start</div>
            </div>
            <div className={styles.elementlink}>
              <div className={styles.linkText}>Features</div>
            </div>
            <div className={styles.elementlink}>
              <div className={styles.linkText}>Use Cases</div>
            </div>
            <div className={styles.elementlink}>
              <div className={styles.linkText}>Testimonials</div>
            </div>
            <div className={styles.elementlink}>
              <div className={styles.linkText}>Pricing</div>
            </div>
          </div>
          <button className={styles.button}>
            <img
              className={styles.iconarrowleft}
              alt=""
              src="/iconarrowleft3.svg"
            />
            <b className={styles.text}>Get your app</b>
            <img
              className={styles.iconarrowleft}
              alt=""
              src="/iconarrowright3.svg"
            />
          </button>
        </nav>
        <div className={styles.section}>
          <div className={styles.heroText}>
            <h1 className={styles.texth1}>Gamechanger</h1>
            <h1 className={styles.texth11}>In The Way</h1>
            <h1 className={styles.texth1}>You Manage</h1>
          </div>
          <p className={styles.textp}>
            In the realm of sports governance, every organization encounters
            common challenges, irrespective of the specific laws and regulations
            they oversee. These challenges include the constant evolution of
            rules and the imperative to ensure their effective dissemination.
          </p>
          <div className={styles.storeButtons}>
            <img
              className={styles.buttonappstoreIcon}
              alt=""
              src="/buttonappstore.svg"
            />
            <img
              className={styles.buttongoogleplayIcon}
              alt=""
              src="/buttongoogleplay.svg"
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.text1}>
              <p className={styles.textp1}>Excellent</p>
              <strong className={styles.textb}>4.9 out of 5</strong>
            </div>
            <div className={styles.stars}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

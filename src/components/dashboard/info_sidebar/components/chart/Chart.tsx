import styles from "./Chart.module.css";

export const Chart = () => {
  return (
    <section className={styles.infoSidebar}>
      <h2 style={{ paddingLeft: "8px" }}>Storage</h2>
      <div className={styles.chart}>
        <div className={styles.circleContainer}>
          <div className={styles.circle}>
            <span className={styles.percentage}>
              <span className={styles.percentageNumber}>85</span>
              <span className={styles.percentageText}>Used</span>
            </span>
          </div>
        </div>
        <h4>420.2 GB of 500 GB used</h4>
      </div>
      {/* storage-info-container */}
      <div className={styles.storageContainer}>
        <div className={styles.storageInfo}>
          <div className={styles.storageInfoCol1}>
            <div className={styles.squareInfo} />
            <div className={styles.storageInfoCol1Text}>
              <h4>Documents</h4>
              <p>720 files</p>
            </div>
          </div>
          <span>200 GB</span>
        </div>
        <div className={styles.divisor} />
        <div className={styles.storageInfo}>
          <div className={styles.storageInfoCol1}>
            <div className={styles.squareInfo} />
            <div className={styles.storageInfoCol1Text}>
              <h4>Documents</h4>
              <p>720 files</p>
            </div>
          </div>
          <span>125 GB</span>
        </div>
        <div className={styles.divisor} />
        <div className={styles.storageInfo}>
          <div className={styles.storageInfoCol1}>
            <div className={styles.squareInfo} />
            <div className={styles.storageInfoCol1Text}>
              <h4>Documents</h4>
              <p>720 files</p>
            </div>
          </div>
          <span>75 GB</span>
        </div>
        <div className={styles.divisor} />
        <div className={styles.storageInfo}>
          <div className={styles.storageInfoCol1}>
            <div className={styles.squareInfo} />
            <div className={styles.storageInfoCol1Text}>
              <h4>Documents</h4>
              <p>720 files</p>
            </div>
          </div>
          <span>50 GB</span>
        </div>
      </div>
    </section>
  );
};

import styles from "./TopHeader.module.css";

export function TopHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.brand}>
            <div className={styles.logo}>ER</div>
            <div>
              <div className={styles.title}>ExchangeRateMarketTest</div>
              <div className={styles.subtitle}>Exchange rates in banks</div>
            </div>
          </div>

          <div className={styles.actions}>
            <input className={styles.search} placeholder="Search bank, currency, city..." />

            <div className={styles.buttons}>
              <button className={styles.ghostButton}>Sofia</button>
              <button className={styles.primaryButton}>Refresh</button>
            </div>
          </div>
        </div>

        <div className={styles.meta}>
          <span>Updated: 12:45</span>
          <span className={styles.metaRight}>Base: BGN • View: 7D</span>
        </div>
      </div>
    </header>
  );
}

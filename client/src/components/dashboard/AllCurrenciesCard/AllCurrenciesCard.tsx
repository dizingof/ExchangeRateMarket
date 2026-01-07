import styles from "./AllCurrenciesCard.module.css";
import { Card } from "../../layout/Card/Card";

const currencies = [
  { code: "USD", buy: 1.79, sell: 1.82, changePct: 0.15 },
  { code: "EUR", buy: 1.955, sell: 1.975, changePct: 0.05 },
  { code: "GBP", buy: 2.28, sell: 2.33, changePct: -0.1 },
  { code: "CHF", buy: 2.01, sell: 2.05, changePct: 0.02 },
  { code: "PLN", buy: 0.45, sell: 0.47, changePct: -0.03 },
];

function formatChange(x: number) {
  const sign = x > 0 ? "+" : "";
  return `${sign}${x.toFixed(2)}%`;
}

export function AllCurrenciesCard() {
  return (
    <Card
      title="All Currencies"
      right={
        <button className={styles.linkButton} type="button">
          Open
        </button>
      }
    >
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Code</th>
              <th className={styles.num}>Buy</th>
              <th className={styles.num}>Sell</th>
              <th className={styles.num}>Change</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((c) => {
              const positive = c.changePct >= 0;
              return (
                <tr key={c.code}>
                  <td className={styles.code}>{c.code}</td>
                  <td className={`${styles.num} ${styles.mono}`}>{c.buy.toFixed(3)}</td>
                  <td className={`${styles.num} ${styles.mono}`}>{c.sell.toFixed(3)}</td>
                  <td
                    className={`${styles.num} ${styles.mono} ${
                      positive ? styles.pos : styles.neg
                    }`}
                  >
                    {formatChange(c.changePct)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

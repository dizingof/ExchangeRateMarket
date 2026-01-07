import styles from "./TopBanksCard.module.css";
import { Card } from "../../layout/Card/Card";

const banks = [
  { name: "UniCredit", buy: 1.79, sell: 1.82, updated: "12:40" },
  { name: "DSK", buy: 1.78, sell: 1.81, updated: "12:38" },
  { name: "Alpha Bank", buy: 1.80, sell: 1.83, updated: "12:41" },
  { name: "Postbank", buy: 1.785, sell: 1.815, updated: "12:36" },
];

export function TopBanksCard() {
  return (
    <Card
      title="Top Banks"
      right={
        <button className={styles.linkButton} type="button">
          View all
        </button>
      }
    >
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Bank</th>
              <th className={styles.num}>Buy</th>
              <th className={styles.num}>Sell</th>
              <th className={styles.num}>Updated</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((b) => (
              <tr key={b.name}>
                <td className={styles.bankName}>{b.name}</td>
                <td className={`${styles.num} ${styles.mono}`}>{b.buy.toFixed(3)}</td>
                <td className={`${styles.num} ${styles.mono}`}>{b.sell.toFixed(3)}</td>
                <td className={`${styles.num} ${styles.mono} ${styles.muted}`}>{b.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

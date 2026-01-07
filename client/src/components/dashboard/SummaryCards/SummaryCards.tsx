import styles from "./SummaryCards.module.css";
import { Card } from "../../layout/Card/Card";

function StatCard(props: { title: string; value: string; subtitle: string }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statTitle}>{props.title}</div>
      <div className={styles.statValue}>{props.value}</div>
      <div className={styles.statSubtitle}>{props.subtitle}</div>
    </div>
  );
}

export function SummaryCards() {
  return (
    <div className={styles.grid}>
      <Card>
        <StatCard title="Best Buy EUR" value="1.9558" subtitle="Bank: Alpha Bank" />
      </Card>
      <Card>
        <StatCard title="Best Sell USD" value="1.7920" subtitle="Bank: UniCredit" />
      </Card>
      <Card>
        <StatCard title="Lowest Spread" value="0.012" subtitle="Bank: DSK" />
      </Card>
    </div>
  );
}

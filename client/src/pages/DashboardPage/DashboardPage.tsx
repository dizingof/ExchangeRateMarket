import styles from "./DashboardPage.module.css";

import { TopHeader } from "../../components/layout/TopHeader/TopHeader";
import { SummaryCards } from "../../components/dashboard/SummaryCards/SummaryCards";
import { RateChartCard } from "../../components/dashboard/RateChartCard/RateChartCard";
import { TopBanksCard } from "../../components/dashboard/TopBanksCard/TopBanksCard";
import { AllCurrenciesCard } from "../../components/dashboard/AllCurrenciesCard/AllCurrenciesCard";

export function DashboardPage() {
  return (
    <div className={styles.page}>
      <TopHeader />

      <main className={styles.main}>
        <SummaryCards />

        <section className={styles.grid}>
          <div className={styles.left}>
            <RateChartCard />
          </div>

          <div className={styles.right}>
            <TopBanksCard />
            <AllCurrenciesCard />
          </div>
        </section>
      </main>
    </div>
  );
}

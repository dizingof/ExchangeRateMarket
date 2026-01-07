import { useMemo, useState } from "react";
import styles from "./RateChartCard.module.css";
import { Card } from "../../layout/Card/Card";
import { getMockRates } from "../../../mock/rates.mock";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const ranges = ["24H", "7D", "1M"] as const;
type Range = (typeof ranges)[number];

function minMax(values: number[]) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (const v of values) {
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return { min, max };
}

export function RateChartCard() {
  const [range, setRange] = useState<Range>("7D");

  const data = useMemo(() => getMockRates(range), [range]);
  const rates = data.map((d) => d.rate);
  const { min, max } = minMax(rates);

  const current = rates[rates.length - 1] ?? 0;
  const first = rates[0] ?? 0;
  const changePct = first ? ((current - first) / first) * 100 : 0;

  return (
    <Card
      title="USD / BGN Rate"
      right={
        <div className={styles.rangeGroup}>
          {ranges.map((r) => (
            <button
              key={r}
              className={`${styles.rangeButton} ${r === range ? styles.rangeButtonActive : ""}`}
              type="button"
              onClick={() => setRange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      }
    >
      <div className={styles.subtitle}>Mock data (позже заменим на API)</div>

      <div className={styles.chartBox}>
       <ResponsiveContainer width="100%" height="100%">
  <AreaChart
    data={data}
    margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
  >
    <defs>
      <linearGradient id="rateFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(37, 99, 235, 0.35)" />
        <stop offset="100%" stopColor="rgba(37, 99, 235, 0.02)" />
      </linearGradient>
    </defs>

    <CartesianGrid strokeDasharray="4 6" />

    <XAxis
      dataKey="t"
      tickMargin={8}
    />

    <YAxis
      domain={[min * 0.995, max * 1.005]}
      tickCount={5}
      tickFormatter={(v) => v.toFixed(3)}
      width={56}
    />

    <Tooltip
      formatter={(value) => Number(value).toFixed(4)}
      labelFormatter={(label) => label}
    />

    <Area
      type="monotone"
      dataKey="rate"
      stroke="rgba(37, 99, 235, 1)"
      fill="url(#rateFill)"
      strokeWidth={2}
      dot={false}
      activeDot={{ r: 4 }}
    />
  </AreaChart>
</ResponsiveContainer>

      </div>

      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <div className={styles.footerLabel}>Current</div>
          <div className={styles.footerValue}>{current.toFixed(4)}</div>
        </div>

        <div className={styles.footerItem}>
          <div className={styles.footerLabel}>Change</div>
          <div className={changePct >= 0 ? styles.footerValuePositive : styles.footerValueNegative}>
            {changePct >= 0 ? "+" : ""}
            {changePct.toFixed(2)}%
          </div>
        </div>

        <div className={styles.footerItem}>
          <div className={styles.footerLabel}>Range</div>
          <div className={styles.footerValue}>
            {min.toFixed(4)} – {max.toFixed(4)}
          </div>
        </div>
      </div>
    </Card>
  );
}

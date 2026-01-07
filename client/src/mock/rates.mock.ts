export type RatePoint = {
  t: string;     // подпись по X (время/дата)
  rate: number;  // значение по Y
};

// детерминированный псевдорандом, чтобы график не "скакал" при перезагрузке
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeSeries(count: number, start: number, volatility: number, seed: number): number[] {
  const rnd = mulberry32(seed);
  const arr: number[] = [];
  let v = start;

  for (let i = 0; i < count; i++) {
    // шаг вверх/вниз
    const delta = (rnd() - 0.5) * volatility;
    v = Math.max(0.1, v + delta);
    arr.push(Number(v.toFixed(4)));
  }

  return arr;
}

export function getMockRates(range: "24H" | "7D" | "1M"): RatePoint[] {
  if (range === "24H") {
    const values = makeSeries(24, 1.79, 0.02, 42);
    return values.map((rate, i) => ({
      t: `${String(i).padStart(2, "0")}:00`,
      rate,
    }));
  }

  if (range === "7D") {
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const values = makeSeries(7, 1.79, 0.03, 43);
    return values.map((rate, i) => ({ t: labels[i], rate }));
  }

  // 1M (30 точек)
  const values = makeSeries(30, 1.79, 0.025, 44);
  return values.map((rate, i) => ({ t: `Day ${i + 1}`, rate }));
}

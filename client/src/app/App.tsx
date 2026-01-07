import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <DashboardPage />
      <Analytics />
    </>
  );
}

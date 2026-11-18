import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

async function DashboardContent() {
  await auth.protect();

  return <h1>Dashboard</h1>;
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <DashboardContent />
    </Suspense>
  );
}

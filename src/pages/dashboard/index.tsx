import type { NextPage } from "next";
import Head from "next/head";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { useAuth } from "../../hooks/use-auth";
import Dashboard from "./home";

const Overview: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Dashboard: Overview | Material Kit Pro</title>
      </Head>
      <Dashboard />
    </>
  );
};

Overview.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Overview;

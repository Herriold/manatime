import Page from "src/components/Page";
import Dashboard from "src/sections/dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <Page title="Tableau de bord" p={2}>
      <Dashboard />
    </Page>
  );
};

export default DashboardPage;

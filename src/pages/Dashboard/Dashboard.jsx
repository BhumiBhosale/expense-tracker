import DashboardHeader from "../../components/dashboard/DashboardHeader";
import SummaryCard from "../../components/dashboard/SummaryCard";

function Dashboard() {
  return (
    <>
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Income"
          amount="₹0"
          color="text-green-500"
        />

        <SummaryCard
          title="Total Expense"
          amount="₹0"
          color="text-red-500"
        />

        <SummaryCard
          title="Savings"
          amount="₹0"
          color="text-blue-600"
        />

        <SummaryCard
          title="This Month"
          amount="₹0"
          color="text-orange-500"
        />
      </div>
    </>
  );
}

export default Dashboard;
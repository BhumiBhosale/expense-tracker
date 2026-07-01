import Dashboard from "../../pages/Dashboard/Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8 bg-slate-50 min-h-screen">
          <Dashboard/>
        </main>
      </div>
    </div>
  );
}

export default Layout;
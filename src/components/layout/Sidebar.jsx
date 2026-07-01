import SidebarItem from "./SidebarItem";
import { navigation } from "../../data/navigation";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-200 flex flex-col">

      <div className="p-8 border-b border-slate-200">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            ET
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              Expense Tracker
            </h1>

            <p className="text-sm text-slate-500">
              Manage your finances
            </p>
          </div>
        </div>

      </div>

      <nav className="flex-1 p-5 space-y-2">
        {navigation.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </nav>

      <div className="p-5 border-t border-slate-200">
        <p className="text-xs text-slate-400 text-center">
          Version 1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
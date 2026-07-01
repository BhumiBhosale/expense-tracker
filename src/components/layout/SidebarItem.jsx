import { NavLink } from "react-router-dom";

function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
        }`
      }
    >
      <Icon size={20} />
      <span>{item.title}</span>
    </NavLink>
  );
}

export default SidebarItem;
import {
  LayoutDashboard,
  ReceiptText,
  ChartColumn,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Transactions",
    icon: ReceiptText,
    path: "/transactions",
  },
  {
    title: "Reports",
    icon: ChartColumn,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
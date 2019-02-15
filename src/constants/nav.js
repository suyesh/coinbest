import { MAIN_ROUTES } from "./routes";

export const NAV_ITEMS = [
  { name: "Dashboard", icon: "grid", route: MAIN_ROUTES.ROOT },
  { name: "Buy/Sell", icon: "repeat", route: MAIN_ROUTES.TRADE },
  { name: "Accounts", icon: "box", route: MAIN_ROUTES.ACCOUNTS },
  { name: "Send", icon: "send", route: MAIN_ROUTES.SEND },
  { name: "Tools", icon: "briefcase", route: MAIN_ROUTES.TOOLS },
  { name: "Settings", icon: "settings", route: MAIN_ROUTES.SETTINGS }
];

import { USER_ROUTES, MAIN_ROUTES } from "./routes";

export const USER_PAGES = [
  { icon: "user", value: "Profile", to: USER_ROUTES.PROFILE },
  { icon: "settings", value: "Settings", to: USER_ROUTES.SETTINGS },
  { icon: "mail", value: "Messages", to: USER_ROUTES.MESSAGES },
  "divider",
  { icon: "life-buoy", value: "Need Help?", to: MAIN_ROUTES.HELP },
  { icon: "log-out", value: "Log Out", to: MAIN_ROUTES.LOGOUT }
];

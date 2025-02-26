/*!

=========================================================
* Dashboard SPC v1.0.0
=========================================================

*/
import Dashboard from "views/Dashboard.jsx";
// import Icons from "views/Icons.jsx";
// import Map from "views/Map.jsx";
// import Notifications from "views/Notifications.jsx";
// import Rtl from "views/Rtl.jsx";
// import TableList from "views/TableList.jsx";
// import Typography from "views/Typography.jsx";
// import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "dashboard_admin",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "icon_admin",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "map_admin",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "notification_admin",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "profile_admin",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "tables_admin",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "typography_admin",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "rtl_admin",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;

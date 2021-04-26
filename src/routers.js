import HomePage from "./Pages/HomePage/HomePage";
import TutorialPage from "./Pages/Tutorial/TutorialPage";
import AssetPage from "./Pages/AssetPage/AssetPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import NotFound from "./Pages/NotFound/NotFound";
const routers = [
  {
    component: () => <HomePage />,
    path: "/home",
    exact: true,
  },
  {
    component: () => <TutorialPage />,
    path: "/tutorial-page",
    exact: false,
  },
  {
    component: () => <AssetPage />,
    path: "/asset-page",
    exact: false,
  },
  {
    component: () => <LoginPage />,
    path: "/login-page",
    exact: false,
  },
  {
    component: () => <NotFound />,
    path: "*",
    exact: false,
  },
];

export default routers;

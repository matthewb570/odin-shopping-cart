import App from "../components/App";
import ShopPage from "../components/page/ShopPage";
import HomePage from "../components/page/HomePage";

const HOME_PAGE_PATH = "/";
const SHOP_PAGE_PATH = "/shop";

const routes = [
  {
    path: HOME_PAGE_PATH,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: SHOP_PAGE_PATH,
        element: <ShopPage />,
      },
    ],
  },
];

export default { routes, HOME_PAGE_PATH, SHOP_PAGE_PATH };

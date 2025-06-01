import { NavLink } from "react-router";
import "../../styles/HomePage.css";
import RouterConfig from "../../router/RouterConfig";

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="filter">
        <div className="content">
          <span>Welcome to OnlineShop!</span>
          <NavLink to={RouterConfig.SHOP_PAGE_PATH}>Start Shopping</NavLink>
        </div>
      </div>
    </section>
  );
}

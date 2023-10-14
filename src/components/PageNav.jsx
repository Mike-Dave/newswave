import { NavLink, Outlet } from "react-router-dom";
import NewsLogo from "./NewsLogo";
import styles from "./PageNav.module.css";
function PageNav() {
  return (
    <nav>
      <div className={`${styles.nav} bg-[#F1EFEF] fixed top-0 w-[100%]`}>
        <NewsLogo />
        <ul
          className={`grid grid-cols-3 md:grid-cols-7 gap-2 p-6 text-center md:mx-auto max-w-7xl md:w-[1000px]`}
        >
          <NavLink to="/" className="bg-[#B4B4B3] p-2 text-sm rounded-md">
            General
          </NavLink>
          <NavLink
            to="/business"
            className="bg-[#B4B4B3] p-2 text-sm rounded-md"
          >
            Business
          </NavLink>
          <NavLink
            to="/entertainment"
            className="bg-[#B4B4B3] p-2 text-sm rounded-md"
          >
            Entertainment
          </NavLink>
          <NavLink to="/health" className="bg-[#B4B4B3] p-2 text-sm rounded-md">
            Health
          </NavLink>
          <NavLink
            to="/science"
            className="bg-[#B4B4B3] p-2 text-sm rounded-md"
          >
            Science
          </NavLink>
          <NavLink
            to="/technology"
            className="bg-[#B4B4B3] p-2 text-sm rounded-md"
          >
            Technology
          </NavLink>
        </ul>
      </div>
      <div className="mt-[200px] mb-10">
        <Outlet />
      </div>
    </nav>
  );
}

export default PageNav;

import { Outlet, NavLink } from "react-router";
import { ROUTES } from "../constants";

export const UserLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to={ROUTES.home()} end>
          Home
        </NavLink>
        <NavLink to={ROUTES.profile()} end>
          Profile
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

import { useContext, useEffect } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  useEffect(() => {
    const lastPath = pathname + search;
    localStorage.setItem("lastPath", lastPath);
  }, [pathname, search]);

  return logged ? children : <Navigate to={"/login"} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

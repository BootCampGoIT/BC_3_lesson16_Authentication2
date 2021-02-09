import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ path, exact, component, restricted, isAuth }) => {
  return isAuth && restricted ? (
    <Redirect to='/tutors' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;

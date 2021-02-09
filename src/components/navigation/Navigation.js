import React, { Suspense } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainroutes";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/actions/authActions";
import NavigationItem from "./NavigationItem";
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";

const Navigation = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();
  const onHandleLogout = () => {
    dispatch(signOut());
  };
  return (
    <>
      <ul className='list right'>
        {mainRoutes.map((route) => (
          <NavigationItem {...route} isAuth={isAuth} key={route.path} />
        ))}
      </ul>
      {isAuth && <button onClick={onHandleLogout}>Logout</button>}

      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
            ) : (
              <PublicRoute {...route} isAuth={isAuth} key={route.path} />
            )
          )}
        </Switch>
      </Suspense>
    </>
  );
};

export default Navigation;

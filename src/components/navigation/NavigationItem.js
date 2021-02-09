import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ isAuth, path, name, exact, isPrivate, restricted }) => {
  return (
    <>
      {!isPrivate && !restricted && (
        <li className='listItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && !restricted && (
        <li className='listItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && restricted && (
        <li className='listItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;

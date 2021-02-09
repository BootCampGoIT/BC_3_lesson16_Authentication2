import React, { Suspense } from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
// import { bootCampRoutes } from "../../../routes/bootcampsRoutes";

const SecondNav = ({ routes }) => {
    const match = useRouteMatch();
    return (
        <>
            <ul className="list">
                {routes.map(({ path, name, exact }) => (
                    <li className="listItem" key={path}>
                        <NavLink
                            to={match.url + path}
                            exact={exact}
                            className="link"
                            activeClassName="activeLink"
                        >
                            {name.toUpperCase()}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Suspense fallback={<h2>...loading</h2>}>
                <Switch>
                    {routes.map(({ path, exact, component }) => (
                        <Route
                            key={path}
                            path={match.url + path}
                            exact={exact}
                            component={component}
                        />
                    ))}
                </Switch>
            </Suspense>
        </>
    );
};

export default SecondNav;

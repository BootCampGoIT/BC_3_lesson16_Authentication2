import React, { useEffect } from "react";
import { coursesRoutes } from "../../routes/coursesRoutes";
import SecondNav from "../secondNav/SecondNav";
import { useHistory, useRouteMatch } from "react-router-dom";

const Courses = () => {
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    history.push(`${match.url}/preview`);
  }, [history, match.url]);

  return <SecondNav routes={coursesRoutes} />;
};

export default Courses;

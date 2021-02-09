import React, { useEffect } from "react";
import { tutorsRoutes } from "../../routes/tutorsRoutes";
import SecondNav from "../secondNav/SecondNav";
import { useHistory, useRouteMatch } from "react-router-dom";
const Tutors = () => {
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    history.push(`${match.url}/preview`);
  }, [history, match.url]);

  return <SecondNav routes={tutorsRoutes} />;
};

export default Tutors;

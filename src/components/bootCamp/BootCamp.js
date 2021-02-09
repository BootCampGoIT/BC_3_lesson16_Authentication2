import React, { useEffect } from "react";
import { bootCampRoutes } from "../../routes/bootcampsRoutes";
import SecondNav from "../secondNav/SecondNav";
import { useHistory, useRouteMatch } from "react-router-dom";

const BootCamp = () => {
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    history.push(`${match.url}/preview`);
    // eslint-disable-next-line
  }, []);
  return <SecondNav routes={bootCampRoutes} />;
};

export default BootCamp;

import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { studentsRoutes } from "../../routes/studentsRoutes";
import SecondNav from "../secondNav/SecondNav";

const Students = () => {
    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        history.push(`${match.url}/preview`);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <SecondNav routes={studentsRoutes} />
        </div>
    );
};

export default Students;



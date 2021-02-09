import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const token = useSelector((state) => state.auth.idToken);
  const localId = useSelector((state) => state.auth.localId);
  const refreshToken = useSelector((state) => state.auth.refreshToken);

  const sendRequest = () => {
    // axios.defaults.headers.common["Authorization"] = token;
    // axios.post(`${process.env.REACT_APP_BASE_URL}/users.json?auth=${token}`, {
    //   data: "hello",
    // });
    axios.post(
      `${process.env.REACT_APP_BASE_URL}/myOwnFolder/${localId}.json?auth=${token}`,
      {
        data: "11111111111111",
      }
    );
  };

  const getRequest = () => {
    axios.get(
      `${process.env.REACT_APP_BASE_URL}/myOwnFolder/${localId}.json?auth=${token}`
    );
  };

  const refreshRequest = () => {
    axios.post(
      `https://securetoken.googleapis.com/v1/token?key=AIzaSyA9wo7pRuiLTs6GNHLw0fMyR_bUxmHKsww`,
      { grant_type: "refresh_token", refresh_token: refreshToken }
    );
  };
  return (
    <div>
      <button onClick={sendRequest}>Send</button>
      <button onClick={getRequest}>Get</button>
      <button onClick={refreshRequest}>Refresh</button>
    </div>
  );
};

export default Test;

// realTime configuration
// {
//     "rules": {
//       "tutors": {
//         ".read": true,
//         ".write": false
//       },
//         "students": {
//            ".read": true,
//         ".write": false
//         },
//           "history": {
//             "$uid": {
//               ".read": "$uid === auth.uid",
//                 ".write": "$uid === auth.uid"
//             }
//           }
//       //     "users": {
//       //   "$user_id": {
//       //     // grants write access to the owner of this user account
//       //     // whose uid must exactly match the key ($user_id)
//       //     ".write": "auth !== null && auth.user_id === 'yuY4zi24JadojY4Y6JwlKHUwnof2'"
//       //   }
//       // }
//     }
//   }

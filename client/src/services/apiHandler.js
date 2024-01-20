// Schemas
import User from "../schemas/User";
import Activities from "../schemas/Activities";
import AverageSessions from "../schemas/AverageSessions";
import Performances from "../schemas/Performances";

// Mock Data
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/fake-data";

// Services - API
async function apiHandler(userId, apiRoute) {
  const url = "http://localhost:3000/user";
  const apiRoutes = ["", "activity", "average-sessions", "performance"];

  const givenUserId = Number(userId);

  if (apiRoutes.includes(apiRoute)) {
    try {
      let response = {};

      // Data are retrieved from the server or mock data
      if (process.env.REACT_APP_DATABASE === undefined) {
        response = await fetch(`${url}/${userId}/${apiRoute}`);

        if (response.ok) {
          const res = await response.json();
          const data = await res.data;

          switch (apiRoute) {
            case apiRoutes[0]:
              const formattedUserData = new User(data);
              return [true, formattedUserData];
            case apiRoutes[1]:
              const userActivityData = new Activities(data);
              return [true, userActivityData];
            case apiRoutes[2]:
              const userSessionsData = new AverageSessions(data);
              return [true, userSessionsData];
            case apiRoutes[3]:
              const userPerformanceData = new Performances(data);
              return [true, userPerformanceData];
            default:
              return;
          }
        } else {
          let customError = {
            status: response.status,
            description: response.statusText,
          };

          return [false, customError];
        }
      } else {
        switch (apiRoute) {
          case apiRoutes[0]:
            const userData = USER_MAIN_DATA.find(
              (user) => user.id === givenUserId
            );
            const formattedUserData = new User(userData);

            return [true, formattedUserData];
          case apiRoutes[1]:
            const userActivities = USER_ACTIVITY.find(
              (user) => user.userId === givenUserId
            );
            const formattedUserActivities = new Activities(userActivities);

            return [true, formattedUserActivities];
          case apiRoutes[2]:
            const userAverageSessions = USER_AVERAGE_SESSIONS.find(
              (user) => user.userId === givenUserId
            );
            const formattedUserAverageSessions = new AverageSessions(
              userAverageSessions
            );

            return [true, formattedUserAverageSessions];
          case apiRoutes[3]:
            const userPerformances = USER_PERFORMANCE.find(
              (user) => user.userId === givenUserId
            );
            const formattedUserPerformances = new Performances(
              userPerformances
            );

            return [true, formattedUserPerformances];
          default:
            return [false, "erreur"];
        }
      }
    } catch (error) {
      console.error(error);

      return [false, "erreur"];
    }
  }
}

export default apiHandler;

// Schemas
import User from "../schemas/User";
import Activities from "../schemas/Activities";
import AverageSessions from "../schemas/AverageSessions";
import Performances from "../schemas/Performances";

// Services - API
async function apiHandler(userId, apiRoute) {
  const url = "http://localhost:3000/user";
  const apiRoutes = ["", "activity", "average-sessions", "performance"];

  if (apiRoutes.includes(apiRoute)) {
    try {
      const response = await fetch(`${url}/${userId}/${apiRoute}`);

      if (response.ok) {
        const res = await response.json();
        const data = await res.data;

        switch (apiRoute) {
          case "":
            const formattedUserData = new User(data);
            return [true, formattedUserData];
          case "activity":
            const userActivityData = new Activities(data);
            return [true, userActivityData];
          case "average-sessions":
            const userSessionsData = new AverageSessions(data);
            return [true, userSessionsData];
          case "performance":
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
    } catch (error) {
      console.error(error);

      return [false, "erreur"];
    }
  }
}

export default apiHandler;

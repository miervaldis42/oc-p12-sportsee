// Schemas
import User from "../schemas/User";

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
            const userActivityData = data.sessions;
            return [true, userActivityData];
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

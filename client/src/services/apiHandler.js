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
        const userData = await res.data;
        const formattedUserData = new User(userData);

        return [true, formattedUserData];
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

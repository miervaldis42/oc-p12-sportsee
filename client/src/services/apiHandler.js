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
          case "average-sessions":
            const userActivityData = data.sessions;
            return [true, userActivityData];
          case "performance":
            const userPerformanceData = {
              performances: [],
              kind: {},
            };

            // Transform performances array
            data.data.forEach((item) => {
              userPerformanceData.performances.push({
                value: item.value,
                kind: item.kind,
              });
            });

            // Transform kind object
            Object.keys(data.kind).forEach((key) => {
              userPerformanceData.kind[key] = {
                name: translateKindInto(data.kind[key], "fr"),
                order: 7 - parseInt(key), // As the order is in reverse (6, 5, 4, 3, 2, 1)
              };
            });

            function translateKindInto(kind, language) {
              if (language === "fr") {
                switch (kind) {
                  case "cardio":
                    return "Cardio";
                  case "energy":
                    return "Energie";
                  case "endurance":
                    return "Endurance";
                  case "strength":
                    return "Force";
                  case "speed":
                    return "Vitesse";
                  case "intensity":
                    return "Intensité";
                  default:
                    return;
                }
              }
            }

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

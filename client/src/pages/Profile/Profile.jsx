// Imports
import { useState, useEffect } from "react";

// Routing
import ROUTESLIST from "../../router/routesList";
import { useParams, useNavigate } from "react-router-dom";

// Components
import Activity from "../../components/Graphs/Activity/Activity";
import AverageTimeSessions from "../../components/Graphs/AverageTimeSessions/AverageTimeSessions";
import Performance from "../../components/Graphs/Performance/Performance";
import KeyDataList from "../../components/Graphs/KeyDataList/KeyDataList";
import Error from "../../components/Container/Error/Error";

// Services
import apiHandler from "../../services/apiHandler";

// Stylesheet
import styles from "./Profile.module.scss";

// 'Profile' Page
function Profile() {
  // Routing - User Id
  const navigate = useNavigate();
  const { userId } = useParams();

  // States
  const [user, setUser] = useState(null);
  const [todayMessage, setTodayMessage] = useState(
    "Bienvenue sur votre profil !"
  );

  const [error, setError] = useState(null);

  // Get user info
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (Number(userId)) {
        // Retrieve genral info on the user
        const resUserInfo = await apiHandler(userId, "");

        let userInfo = null;
        if (resUserInfo[0]) {
          userInfo = resUserInfo[1];
          setTodayMessage(
            "Félicitations ! Vous avez explosé vos objectifs hier 👏"
          );
        } else if (!resUserInfo[0] && resUserInfo[1] === "erreur") {
          navigate(ROUTESLIST.error400.path);
        } else {
          setError(resUserInfo[1]);
          return;
        }

        // Retrieve the activity data of the user
        const resActivityData = await apiHandler(userId, "activity");
        if (resUserInfo[0] && resActivityData[0]) {
          userInfo.activities = resActivityData[1];
        }

        // Retrieve the average time of the user sessions
        const resAverageSessions = await apiHandler(userId, "average-sessions");
        if (resUserInfo[0] && resAverageSessions[0]) {
          userInfo.sessions = resAverageSessions[1];
        }

        // Retrieve the performances of the user
        const resPerformance = await apiHandler(userId, "performance");
        if (resUserInfo[0] && resPerformance[0]) {
          userInfo.performances = resPerformance[1];
        }

        setUser(userInfo);
      } else {
        setError({ status: 401 });
      }
    };

    fetchUserInfo();
  }, [navigate, userId]);

  return (
    <>
      {user !== null && (
        <>
          <h1>
            Bonjour <span>{user.firstname}</span>
          </h1>

          <p className={styles["today-message"]}>{todayMessage}</p>

          <section
            aria-label={`Sport data linked to ${user.firstname}`}
            className={styles["graph-section"]}
          >
            <section
              aria-label={`Graphics & Charts related to ${user.firstname}`}
              className={styles["chart-section"]}
            >
              <Activity data={user.activities} />

              <AverageTimeSessions data={user.sessions} />
              <Performance data={user.performances} />
            </section>

            <KeyDataList
              aria-label={`List of ${user.firstname}'s calories, proteins, carbohydrate and lipids`}
              data={user.keyDatas}
            />
          </section>
        </>
      )}

      {error && <Error error={error}></Error>}
    </>
  );
}

export default Profile;

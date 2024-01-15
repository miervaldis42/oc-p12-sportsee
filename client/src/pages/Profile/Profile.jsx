// Imports
import { useState, useEffect } from "react";

// Routing
import ROUTESLIST from "../../router/routesList";
import { useParams, useNavigate } from "react-router-dom";

// Components
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
  const [error, setError] = useState(null);
  const [todayMessage, setTodayMessage] = useState(
    "Bienvenue sur votre profil !"
  );

  // Get user info
  useEffect(() => {
    const fetchData = async () => {
      if (Number(userId)) {
        const res = await apiHandler(userId, "");

        if (res[0]) {
          setUser(res[1]);
          setTodayMessage(
            "Félicitations ! Vous avez explosé vos objectifs hier 👏"
          );
        } else if (!res[0] && res[1] === "erreur") {
          navigate(ROUTESLIST.error400.path);
        } else {
          setError(res[1]);
        }
      } else {
        setError({ status: 401 });
      }
    };

    fetchData();
  }, [navigate, userId]);

  return (
    <>
      {user !== null && (
        <>
          <h1>
            Bonjour <span>{user.firstname}</span>
          </h1>

          <p>{todayMessage}</p>

          <section
            aria-label={`Sport data linked to ${user.firstname}`}
            className={styles["graph-section"]}
          >
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

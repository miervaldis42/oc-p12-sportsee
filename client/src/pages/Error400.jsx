// Components
import ErrorLayout from "./layouts/ErrorLayout/ErrorLayout";

// Routing
import ROUTESLIST from "../router/routesList";
import { Link } from "react-router-dom";

// HTTP Code 400 content
function Error400() {
  return (
    <ErrorLayout>
      <h2>
        Arrivé(e) dans une <span>impasse</span> ?
      </h2>

      <p>
        Pas de soucis !
        <br /> Après tout, notre rôle est de toujours vous maintenir sur la{" "}
        <span>bonne voie</span> !
      </p>

      <Link to={ROUTESLIST.home.path}>🏃 Retourner à l'Accueil 🏃</Link>
    </ErrorLayout>
  );
}

export default Error400;

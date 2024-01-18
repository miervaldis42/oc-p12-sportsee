// Routing
import ROUTESLIST from "../../../router/routesList";
import { Link } from "react-router-dom";

// Stylesheet
import styles from "./Error.module.scss";

// Error Content to display in pages when the user is authorized
function Error({ error }) {
  if (error === undefined) error = { status: 0 };

  // Populate error object with infos
  switch (error.status) {
    case 204:
      error.title = (
        <h2>
          Le chien a <span>mangé nos papiers</span>!
        </h2>
      );
      error.message = (
        <p>
          Notre serveur a bien traité la demande mais je <span>ne peux</span>{" "}
          nous fournir de réponse.
          <br />
          <br /> Réessayez ou revenez plus tard le{" "}
          <span>temps que nous enquêtons</span> 🕵️‍♀️
        </p>
      );
      break;
    case 400:
      error.title = <h2>Bug dans la {<span>matrice</span>} ?</h2>;
      error.message = (
        <p>
          Il semblerait qu'une <span>erreur de syntaxe</span> nous empêche de
          procéder au bon déroulement du parcours.
          <br />
          <br /> Réessayez ou revenez plus tard le{" "}
          <span>temps que nous enquêtons</span> 🕵️‍♀️
        </p>
      );
      break;
    case 401:
    case 404:
      error.title = (
        <h2>Vous êtes sûr/sure qu'{<span>on se connaît</span>} ?</h2>
      );
      error.message = (
        <>
          <p>
            On a cherché dans nos petits papiers, mais vous ne semblez{" "}
            <span>pas être connu(e)</span> de nos services 🤔
          </p>

          <p>
            Veuillez retourner à l'
            <Link to={ROUTESLIST.home.path}>Accueil</Link> afin qu'on puisse
            vous reconnaître.
          </p>
        </>
      );
      break;
    case 500:
      error.title = (
        <h2>
          Envie de tout <span>plaquer</span> ?
        </h2>
      );
      error.message = (
        <p>
          C'est ce que notre serveur vient de décider de faire...
          <br /> Revenez plus tard pour voir s'il a changé d'avis 😅
        </p>
      );
      break;
    default:
      error.title = (
        <h2>
          Page en <span>construction</span>
        </h2>
      );
      error.message = (
        <p>
          Cette page est actuellement soumise à des{" "}
          <span>tests d'efforts intenses</span> pour attester de sa robustesse.
          <br />
          <br />
          Nous vous tiendrons au courant quand elle sera disponible 🤙
        </p>
      );
      break;
  }

  const { title, message, status, description } = error;

  return (
    <>
      {title}
      {message}

      {description ? (
        <p className={styles["http-error"]}>
          Message for our staff : "Error {status} - {description}"
        </p>
      ) : null}
    </>
  );
}

export default Error;

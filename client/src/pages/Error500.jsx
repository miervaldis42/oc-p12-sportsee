// Components
import ErrorLayout from "./layouts/ErrorLayout/ErrorLayout";

// HTTP Code 500 content
function Error500() {
  return (
    <ErrorLayout>
      <h2>
        Quelles sont vos <span>envies</span> du moment ?
      </h2>

      <p>
        On a tous un jour eu envie de ne rien faire, de tout plaquer...
        <br /> Hé bien, notre serveur a décidé qu'aujourd'hui, c'était le{" "}
        <span>bon moment</span> !
      </p>

      <p>Repassez plus tard pour voir s'il a changé d'avis 😅...</p>
    </ErrorLayout>
  );
}

export default Error500;

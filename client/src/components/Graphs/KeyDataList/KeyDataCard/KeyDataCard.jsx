// Stylesheet
import styles from "./KeyDataCard.module.scss";

// Component
function KeyDataCard({ icon, bgColor, quantity, measure, name }) {
  return (
    <li className={styles["keydata-card"]}>
      {/* Icon */}
      <div
        aria-label="Keydata Icon Zone"
        className={styles["keydata-icon-zone"]}
        style={{ backgroundColor: bgColor }}
      >
        <img src={icon} alt="User key data icon" />
      </div>

      {/* Keydata info */}
      <div
        aria-label={`${name} - User key data information`}
        className={styles["keydata-info-area"]}
      >
        <p>{`${quantity ?? "- "}${measure}`}</p>
        <p>{name}</p>
      </div>
    </li>
  );
}

export default KeyDataCard;

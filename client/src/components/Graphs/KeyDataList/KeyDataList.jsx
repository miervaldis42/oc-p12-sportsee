// Imports
import { Children } from "react";

// Components
import KeyDataCard from "./KeyDataCard/KeyDataCard";

// Stylesheet
import styles from "./KeyDataList.module.scss";

// List of KeyData
function KeyDataList({ data }) {
  return (
    <ul className={styles["keydata-list"]}>
      {Children.toArray(
        data.map((k) => (
          <KeyDataCard
            icon={k.img}
            bgColor={k.backgroundColor}
            quantity={k.quantity}
            measure={k.measure}
            name={k.name}
          />
        ))
      )}
    </ul>
  );
}

export default KeyDataList;

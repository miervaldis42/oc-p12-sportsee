// Imports
import { Children } from "react";

// Components
import KeyDataCard from "./KeyDataCard/KeyDataCard";

// List of KeyData
function KeyDataList({ data }) {
  return (
    <ul>
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

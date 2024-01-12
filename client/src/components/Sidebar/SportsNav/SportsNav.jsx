// Imports
import { Children } from "react";
import { NavLink } from "react-router-dom";

// Stylesheet
import styles from "./SportsNav.module.scss";

// Assets
import { ReactComponent as YogaIcon } from "../../../assets/yoga.svg";
import { ReactComponent as SwimmingIcon } from "../../../assets/swimming.svg";
import { ReactComponent as CyclingIcon } from "../../../assets/cycling.svg";
import { ReactComponent as WeightliftingIcon } from "../../../assets/weightlifting.svg";

// 'SportsNav' Component
function SportsNav() {
  const sports = ["yoga", "swimming", "cycling", "weightlifting"];

  const renderSVGFile = (sport) => {
    switch (sport) {
      case sports[0]:
        return <YogaIcon />;
      case sports[1]:
        return <SwimmingIcon />;
      case sports[2]:
        return <CyclingIcon />;
      case sports[3]:
        return <WeightliftingIcon />;
      default:
        return;
    }
  };

  return (
    <nav aria-label="Navigation through the sports practiced by the user.">
      {Children.toArray(
        sports.map((s) => (
          <NavLink to="#" className={styles["sport-nav-item"]}>
            {renderSVGFile(s)}
          </NavLink>
        ))
      )}
    </nav>
  );
}

export default SportsNav;

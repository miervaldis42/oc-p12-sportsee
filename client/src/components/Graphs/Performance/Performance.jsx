// Imports
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Components
import { ReactComponent as WeightLiftingIcon } from "../../../assets/weightlifting.svg";

// Stylesheet
import styles from "./Performance.module.scss";

/**
 * Component for showing user performance using RadarChart from recharts library
 *
 * @see {@link https://recharts.org/en-US/api/RadarChart} for further information on RadarChart from recharts api
 * @component
 * @example
 * const data = {
 *  performances: [ { value:80, kind: 1 },...]
 *  kind: {  1: { name: 'Cardio', order: 6 },  2: { name: 'Energie', order: 5 },  3: { name: 'Endurance', order: 4 },  4: { name: 'Force', order: 3 },  5: { name: 'Vitesse', order: 2 },  6: { name: 'Intensité', order: 1 } }
 *  }
 *  return (
 *  <Performance data={data} />
 * )
 * @prop {Object} data required performance data
 * @prop {Object[]} data.performances performance data filtered by kind and sorted
 * @prop {Object} data.kind performance kind sanitized
 * @returns {Performance} Returns Performance component
 */
const Performance = ({ data }) => {
  console.log("d", data);
  if (data !== null && data.performances !== undefined) {
    /**
     * Component for showing custom tooltip on performance chart
     *
     * @component
     * @prop {Bool} active
     * @prop {Array} payload
     * @returns {(null | CustomTooltip)}
     */
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className={styles["custom-tooltip"]}>
            <p>{`${payload[0].value}`}</p>
          </div>
        );
      }

      return null;
    };

    return (
      <ResponsiveContainer className={styles["performance-card"]}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data.performances}
          startAngle={90}
          endAngle={-270}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={(value) => data.kind[value].name}
            tick={{ fill: "white", fontSize: "12px" }}
          />
          <Radar
            dataKey="value"
            stroke="rgba(255, 1, 1, 0.7)"
            fill="rgba(255, 1, 1, 0.7)"
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  } else {
    return (
      <div className={`${styles["performance-card"]} ${styles["no-data"]}`}>
        <WeightLiftingIcon />

        <p>N'oubliez pas de vous échauffer 🏋️</p>
      </div>
    );
  }
};

export default Performance;

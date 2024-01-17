// Imports
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
  YAxis,
} from "recharts";

// Components
import { ReactComponent as SwimmingIcon } from "../../../assets/swimming.svg";

// Stylesheet
import styles from "./AverageTimeSessions.module.scss";

/**
 * Component for showing user average sessions using LineChart from recharts library
 *
 * @see {@link https://recharts.org/en-US/api/LineChart} for further information on LineChart from recharts api
 * @component
 * @example
 * const data = [{day: 1, sessionLength: 30},...]
 * return (
 *  <AverageTimeSessions data={data} />
 * )
 * @prop {Object[]} data required average sessions data
 * @prop {Number} data[].day session day
 * @prop {Number} data[].sessionLength session length
 * @returns {AverageTimeSessions} Returns AverageTimeSessions component
 */
const AverageTimeSessions = ({ data }) => {
  if (data !== null && data.length > 0) {
    const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

    /**
     * Component for showing custom tooltip on this average sessions chart
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
            <p className={styles.label}>{`${payload[0].value} min`}</p>
          </div>
        );
      }

      return null;
    };

    /**
     * Component for showing rectangle opacity in function of array of points in params
     *
     * @param {Object[]} points Array of points
     * @returns {Rectangle}
     */
    const CustomCursor = ({ points }) => {
      return (
        <Rectangle
          fill="#000000"
          opacity={0.2}
          x={points[1].x}
          width={1000}
          height={700}
        />
      );
    };

    return (
      <ResponsiveContainer className={styles["sessions-area"]}>
        <h2 className={styles["activity-title"]}>Durée moyenne des sessions</h2>

        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            type="number"
            domain={[1, 7]}
            tickCount="7"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => weekDays[value - 1]}
            tick={{ fill: "white", fontSize: "12px" }}
            tickMargin={0}
          />
          <YAxis hide={true} padding={{ top: 80, bottom: 40 }} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            stroke="#FFFFFF"
            strokeWidth={2}
            activeDot={{ r: 4 }}
            legendType="none"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  } else {
    return (
      <div className={`${styles["sessions-area"]} ${styles["no-data"]}`}>
        <SwimmingIcon />

        <p>N'oubliez pas d'allumer votre montre fitness ⌚</p>
      </div>
    );
  }
};

export default AverageTimeSessions;

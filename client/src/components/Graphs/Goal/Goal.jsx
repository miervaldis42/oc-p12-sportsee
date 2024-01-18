// Imports
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Legend,
} from "recharts";

// Stylesheet
import styles from "./Goal.module.scss";
import { ReactComponent as YogaIcon } from "../../../assets/yoga.svg";

/**
 * Component for showing user goal using RadialBarChart from recharts library
 *
 * @see {@link https://recharts.org/en-US/api/RadialBarChart} for further information on RadialBarChart from recharts api
 * @component
 * @example
 * const data = 0.12
 * return (
 *  <Goal data={data} />
 * )
 * @prop {Number} data required user today score
 * @returns {Goal} Returns Goal component
 */
function Goal({ data }) {
  if (data !== null && data !== undefined) {
    const res = [{ score: data }];

    /**
     * Component for showing custom legend on this Goal chart
     *
     * @component
     * @returns {(null | RenderLegend)}
     */
    const RenderLegend = () => (
      <div className={styles["score-container"]}>
        <span className={styles.score}>{data * 100}%</span>
        <p className={styles.description}>de votre objectif</p>
      </div>
    );

    return (
      <ResponsiveContainer className={styles["goal-card"]}>
        <h2 className={styles["goal-title"]}>Score</h2>

        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="90%"
          barSize={15}
          data={res}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="score"
            fill="red"
            cornerRadius={20}
          />
          <Legend
            width={120}
            height={120}
            layout="vertical"
            verticalAlign="middle"
            align="center"
            content={<RenderLegend />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  } else {
    return (
      <div className={`${styles["goal-card"]} ${styles["no-data"]}`}>
        <YogaIcon />

        <p>Prenez un peu de temps pour vous 🧘</p>
      </div>
    );
  }
}

export default Goal;

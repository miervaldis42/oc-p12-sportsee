// Imports

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Components
import { ReactComponent as CyclingIcon } from "../../../assets/cycling.svg";

// Stylesheet
import styles from "./Activity.module.scss";

/**
 * Component for showing user activity using BarChart from recharts library
 *
 * @namespace
 * @see {@link https://recharts.org/en-US/api/BarChart} for further information on BarChart from recharts api
 * @component
 * @example
 * const data = [{day:"2020-07-01", kilogram: 80, calories:240},...]
 * return (
 *  <Activity data={data} />
 * )
 * @prop {Object[]} data required actvity sessions
 * @prop {String} data[].day session day
 * @prop {Number} data[].kilogram session kilogram
 * @prop {String} data[].calories session calories
 * @returns {Activity} Returns Activity component
 */
const Activity = ({ data }) => {
  if (data !== null && data.length > 0) {
    /**
     * Component for showing custom tooltip on this activity chart
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
            <p>{`${payload[0].value}Kg`}</p>
            <p>{`${payload[1].value}Kcal`}</p>
          </div>
        );
      }

      return null;
    };

    /**
     * Component for showing custom legend on this activity chart
     *
     * @component
     * @prop {Array} payload
     * @returns {(null | RenderLegend)}
     */
    const RenderLegend = ({ payload }) => (
      <div className={styles["activity-legend-container"]}>
        <h2 className={styles["activity-title"]}>Activité quotidienne</h2>
        <span className={styles["flex-1"]}></span>
        {payload.map((entry, index) => (
          <div
            className={styles["activity-legend"]}
            key={`activity-legend-${index}`}
          >
            <div
              className={styles["legend-circle"]}
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className={styles["activity-legend-title"]}>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );

    return (
      <ResponsiveContainer className={styles["activity-card"]}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={10}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={(value, index) => index + 1}
            tick={{ fill: "rgba(155, 158, 172, 1)", fontSize: "14px" }}
            tickMargin={10}
          />
          <YAxis
            hide={true}
            yAxisId="left"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(155, 158, 172, 1)", fontSize: "14px" }}
            tickMargin={10}
            tickCount={3}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(155, 158, 172, 1)", fontSize: "14px" }}
            tickMargin={10}
            tickCount={4}
            type="number"
            domain={[(dataMin) => dataMin - 1, (dataMax) => dataMax + 1]}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            height={50}
            wrapperStyle={{
              paddingBottom: "30px",
            }}
            content={<RenderLegend />}
          />
          <Bar
            yAxisId="right"
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="left"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  } else {
    return (
      <div className={`${styles["activity-card"]} ${styles["no-data"]}`}>
        <CyclingIcon />

        <p>Un peu de sport vous fera le plus grand bien !</p>
      </div>
    );
  }
};

export default Activity;

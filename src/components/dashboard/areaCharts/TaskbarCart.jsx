import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./AreaCharts.scss";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const data = [
  {
    task: "Task 1",
    Operation1: 6,
    Operation2: 3,
    Operation3: 3,
    Operation4: 1,
    Operation5: 2,
  },
  {
    task: "Task 2",
    Operation1: 2,
    Operation2: 4,
    Operation3: 2,
    Operation4: 0,
    Operation5: 8,
  },
  {
    task: "Task 3",
    Operation1: 1,
    Operation2: 2,
    Operation3: 4,
    Operation4: 14,
    Operation5: 0,
  },
  {
    task: "Task 4",
    Operation1: 3,
    Operation2: 2,
    Operation3: 3,
    Operation4: 0,
    Operation5: 12,
  },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1'];
const uniqueOperations = Object.keys(data[0]).filter(key => key !== 'task');
console.log(uniqueOperations)
const TaskChart = ({ data }) => {
  const { theme } = useContext(ThemeContext);


  return (
    <div className="bar-chart">
      <div style={{marginBottom:"10px"}}> <h3>Trace Logs Bar Chart</h3></div>
      <div className="line-chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            barSize={25}
            barGap={20}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 30, bottom: 10 }}
          >
            <XAxis dataKey="applicationName"
            />
            <YAxis
              label={{ offset: -10, value: 'Time Taken(sec)', angle: -90, position: 'insideLeft' }}
            />

            <Tooltip />
            {["operationName", "operationId", "noOfOperation", "totalTimeTaken"].map((item, index) => (
              <Bar key={index} dataKey={item} fill={COLORS[index % COLORS.length]} name={item} />
            ))}
            {/* <Legend 
      layout="horizontal" verticalAlign="bottom" align="center"
      /> */}

          </BarChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default TaskChart;

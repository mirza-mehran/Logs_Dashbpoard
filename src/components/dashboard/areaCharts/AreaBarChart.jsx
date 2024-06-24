
import { useContext } from "react";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from 'recharts';
import { ThemeContext } from "../../../context/ThemeContext";
import "./AreaCharts.scss";

const data = [
  { name: 'Error something 1', count: 45 },
  { name: 'Error something 2', count: 30 },
  { name: 'Error something 3', count: 15 },
  { name: 'Error something 4', count: 10 },
  { name: 'Error something 5', count: 5 },
];



const AreaBarChart = ({data}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="bar-chart">
      <div style={{marginBottom:"10px"}}> <h3>Error Logs Bar Chart</h3></div>
      <div className="bar-chart-wrapper">
      <ResponsiveContainer width="100%" height={'100%'}>
    <BarChart
      barSize={25}
      barGap={20}
      // height={300}
      layout="vertical"
      data={data}
      margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis type="number" label={{ value: 'No of time the error occurred', position: 'insideBottom', offset: -15 }} />
      <YAxis
        width={130}
        type="category" dataKey="error" label={{ offset: -50, value: 'Error name', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      {/* <Legend verticalAlign="top" /> */}
      <Bar
        legendType='line'

        dataKey="noOfTime" fill="#156082" />
    </BarChart>
    
  </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;

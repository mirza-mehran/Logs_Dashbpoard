import { useContext } from "react";

import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

import {
    PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
  
  const data = [
    { name: 'Client 1', value: 398 },
    { name: 'Client 2', value: 294 },
    { name: 'Client 3', value: 109 },
    { name: 'Client 4', value: 10 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const MyPieChart = () => (
    <ResponsiveContainer width="100%" height={'100%'}>
      <PieChart 
    //   width={300}
    //   height={300}
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend 
       layout="horizontal"
       verticalAlign="bottom"
       align="center"
        />
      </PieChart>
   </ResponsiveContainer>
  );

const PieChartPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="bar-chart">
      <div className="pie-chart-wrapper">
        <MyPieChart/>
      </div>
    </div>
  );
};

export default PieChartPage;

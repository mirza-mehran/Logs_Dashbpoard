import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";


const DATA = [
 { id: 4, name: "ghi", available: 0, cpu_usage: "20", memory_available: "300", space: "2000", sr_name: "asdfghjkl" },
  { id: 5, name: "jkl", available: 1, cpu_usage: "25", memory_available: "450", space: "3000", sr_name: "zxcvbnm" },
  { id: 6, name: "mno", available: 0, cpu_usage: "30", memory_available: "600", space: "4000", sr_name: "lkjhgfds" },
  { id: 7, name: "pqr", available: 1, cpu_usage: "35", memory_available: "750", space: "5000", sr_name: "poiuytrewq" },
  { id: 8, name: "stu", available: 0, cpu_usage: "40", memory_available: "900", space: "6000", sr_name: "mnbvcxz" },
  { id: 9, name: "vwx", available: 1, cpu_usage: "45", memory_available: "1050", space: "7000", sr_name: "qazwsxedc" },
  { id: 10, name: "yz", available: 0, cpu_usage: "50", memory_available: "1200", space: "8000", sr_name: "rfvtgbyhn" },
];

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}`;
  };

  const formatYAxisLabel = (value) => `${value}`;
  const formatLegendValue = (value) => value.charAt(0).toUpperCase() + value.slice(1);


  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Server Usage Overview</h5>
        <div className="chart-info-data">
          <div className="info-data-value">Total Servers: {DATA.length}</div>
          {/* <div className="info-data-text">
            <FaArrowUpLong />
            <p>5% than last month.</p>
          </div> */}
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={DATA}
            margin={{
              top: 5,
              right: 5,
              left: 15,
              bottom: 5,
            }}
          >
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={8}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <XAxis
              padding={{ left: 10 }}
              dataKey="name"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />

            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <YAxis tickFormatter={formatYAxisLabel} />
            <Tooltip />
            <Legend formatter={formatLegendValue} />
            <Bar
              dataKey="cpu_usage" fill="#82ca9d" name="CPU Usage (%)"
              // dataKey="profit"
              // fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="memory_available" fill="#8884d8" name="Memory Available (MB)"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="space" fill="#ffc658" name="Space (MB)"
              // dataKey="profit"
              // fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;

import dayjs from 'dayjs';
import {
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import "./AreaCharts.scss";

const data = [
  {
    time: "11:00",
    ABC: 3,
    XYZ: 7,
    PLK: 6,
  },
  {
    time: "12:00",
    ABC: 4,
    XYZ: 2,
    PLK: 8,
  },
  {
    time: "01:00",
    ABC: 3,
    XYZ: 5,
    PLK: 9,
  },
  {
    time: "02:00",
    ABC: 3,
    XYZ: 6,
    PLK: 4,
  },
];

const formatDateToHHMM = (timestamp) => {
  console.log(timestamp)
  return dayjs(timestamp).format('HH:mm');
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

// Get the unique application names
const uniqueApplications = Object.keys(data[0]).filter(key => key !== 'time');
console.log(uniqueApplications)


const LineChartPage = ({ data }) => {
  // console.log(data)

  let filterData = data?.map((item) => ({
    time: formatDateToHHMM(item?.createDate),
    ...item,
  }))
  return (
    <div className="bar-chart">
      <div style={{marginBottom:"10px"}}> <h3>Error Logs Line Chart</h3></div>
      <div className="line-chart-wrapper">
        <ResponsiveContainer width="100%" height={"100%"}>
          <LineChart data={filterData}
            margin={{ top: 15, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis
              dataKey="time" padding={{ left: 30, right: 30 }} >
              <Label value="Time" offset={0} position="bottom" />
            </XAxis>
            <YAxis
              label={{ value: 'No of errors', angle: -90, position: 'left' }}
            />
            <Tooltip />
            {["applicationName", "totalNoOfErrors"].map((app, index) => (<Line key={index} type="monotone" dataKey={app} name={app} stroke={COLORS[index % COLORS.length]} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartPage;

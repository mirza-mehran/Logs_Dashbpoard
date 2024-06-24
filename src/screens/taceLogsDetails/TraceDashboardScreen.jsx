import { useEffect, useState } from "react";
import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import TraceLogsTable from "./TraceLogsTable";
import axios from 'axios';
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { Base_url } from "../../constants/url";

let currentDate = dayjs();

// Format the current date in "YYYY-MM-DD" format
let formattedDate = currentDate.format('YYYY-MM-DD');

console.log(formattedDate); 

const Dashboard = () => {

  const [traceLogs, setTraceLogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { OperationId } = useParams();


  const fetchDataFromApi = async (filter, endpoint) => {
    const url = `${Base_url}/api/Logs/${endpoint}`;
    try {
      const response = await axios.get(url,
        {
          params: {
            StartDate:  filter?.StartDate || formattedDate,
            EndDate: filter?.EndDate|| formattedDate,
            OperationId: OperationId,
            ...(filter?.ApplicationName && { ApplicationName : filter?.ApplicationName }),
            ...(filter?.ClientId && { ClientId: filter?.ClientId }),
            ...(filter?.UserName && { UserName:filter?.UserName }),
            ...(filter?.ServerName && { ServerName :filter?.ServerName}),
          },
        headers: {
          'Accept': '*/*', 
        }
      });

      return response.data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
  const handleButtonClick = async (filterData={}) => {
    setLoading(true);
    try {
      console.log({filterData})
      const [
        traceLogsData
      ] = await Promise.all([
        fetchDataFromApi(filterData,  'TraceLogDetail'),
      ]);
      setTraceLogs(traceLogsData);
      setLoading(false); // Set loading state to false after fetch
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message); // Set error state if fetch fails
      setLoading(false); // Set loading state to false on error
    }
  };
  useEffect(() => {
    handleButtonClick()
  }, [])
  return (
    <div className="content-area">
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}
      <div style={{marginBottom:"10px"}}>
      <h2 className="area-top-title">Trace Details</h2>
      </div>
      <TraceLogsTable data={traceLogs?.details || []} />
    </div>
  );
};

export default Dashboard;

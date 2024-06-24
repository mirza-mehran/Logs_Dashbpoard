import { useEffect, useState } from "react";
import {  AreaTop } from "../../components";
import ErrorLogTable from "./ErrorLogDetailsTable";
import axios from 'axios';
import dayjs from "dayjs";
import { useParams } from "react-router-dom";



let currentDate = dayjs();
let formattedDate = currentDate.format('YYYY-MM-DD');

console.log(formattedDate); 

const Dashboard = () => {
  const [errorLogs, setErrorLogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { application_name } = useParams();



  const fetchDataFromApi = async (filter, endpoint) => {
    const url = `https://localhost:60266/api/Logs/${endpoint}`;
    try {
      const response = await axios.get(url,
        {
          params: {
            StartDate:  filter?.StartDate || formattedDate,
            EndDate: filter?.EndDate|| formattedDate,
            ApplicationName:application_name,
            // ...(servername&& { ApplicationName :servername }),
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
      console.log(filterData)
      // return
      const [
        errorLogsData,
      ] = await Promise.all([

        fetchDataFromApi(filterData,  'ErrorLogsDetail'),

      ]);
      setErrorLogs(errorLogsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message); 
      setLoading(false); 
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
        <h2 className="area-top-title">Error Details</h2>
        </div>
      <ErrorLogTable data={errorLogs?.details || []} />
    </div>
  );
};

export default Dashboard;

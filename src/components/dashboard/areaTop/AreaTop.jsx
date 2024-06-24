import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import dayjs from "dayjs";

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderRadius: '4px',
    border: '1px solid #ced4da',
    padding: '10px 12px',
  },
  '& .MuiInputBase-input': {
    fontSize: '1rem',
  },
  '& .MuiInputLabel-root': {
    fontSize: '1rem',
    top: '-5px',
  },
  '& .MuiInputLabel-shrink': {
    top: '0',
  },
});



const AreaTop = ({ handleButtonClick }) => {
  const { openSidebar } = useContext(SidebarContext);
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [applicationName, setApplicationName] = useState('');
  const [clientId, setClientId] = useState('');
  const [userName, setUserName] = useState('');
  const [serverName, setServerName] = useState('');


  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);
  const defaultDate = new Date();
  const handleClickOutside = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Logs Dashboard</h2>
      </div>
      <div className="filters-wrapper">
        <div className='filter-container'>
          <div className="filter">
            <label className="input-label">Start Date</label>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  defaultValue={dayjs(new Date())}
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="filter">
            <label className="input-label">End Date</label>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  defaultValue={dayjs(new Date())}
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="filter">
            <label className="input-label">Application Name</label>
            <input
              type="text"
              className="text-input"
              placeholder="Application Name"
              value={applicationName}
              onChange={(e) => setApplicationName(e.target.value)}
            />
          </div>
        </div>
        <div className='filter-container'>
          <div className="filter">
            <label className="input-label">Server Name</label>
            <input type="text"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              className="text-input" placeholder="Server Name" />
          </div>
          <div className="filter">
            <label className="input-label">Username</label>
            <input
              type="text"
              className="text-input"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="filter">
            <label className="input-label">Client ID</label>
            <input
              type="text"
              className="text-input"
              placeholder="Client ID"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            />
          </div>
        </div>
        <button onClick={() => {
          handleButtonClick({
            StartDate: startDate?.format('YYYY-MM-DD') || '2024-05-26',
            EndDate: endDate?.format('YYYY-MM-DD') || "2024-05-26",
            ApplicationName: applicationName,
            ClientId: clientId,
            UserName: userName,
            ServerName: serverName,
          })
        }} className="load-btn">Load</button>
      </div>

    </section>
  );
};

export default AreaTop;
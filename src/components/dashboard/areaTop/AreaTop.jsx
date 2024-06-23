import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);

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
        <div className="filter">
          <label className="input-label">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            className="date-input"
            placeholderText="Select date"
          />
        </div>
        <div className="filter">
          <label className="input-label">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MM/dd/yyyy"
            className="date-input"
            placeholderText="Select date"
          />
        </div>
        <div className="filter">
          <label className="input-label">Server Name</label>
          <input type="text" className="text-input" placeholder="Server Name" />
        </div>
        <div className="filter">
          <label className="input-label">Application Name</label>
          <input
            type="text"
            className="text-input"
            placeholder="Application Name"
          />
        </div>
        <button className="load-btn">Load</button>
      </div>
    </section>
  );
};

export default AreaTop;

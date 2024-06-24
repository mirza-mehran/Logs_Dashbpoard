// DashboardContext.js

import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [healthCheckLogs, setHealthCheckLogs] = useState(null);
  const [errorLogs, setErrorLogs] = useState(null);
  const [traceLogs, setTraceLogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorLogsBarGraphData, setErrorLogsBarGraphData] = useState([]);
  const [errorLogsGraphData, setErrorLogsGraphData] = useState([]);
  const [traceLogsGraphData, setTraceLogsGraphData] = useState([]);

  const contextValue = {
    healthCheckLogs,
    setHealthCheckLogs,
    errorLogs,
    setErrorLogs,
    traceLogs,
    setTraceLogs,
    loading,
    setLoading,
    error,
    setError,
    errorLogsBarGraphData,
    setErrorLogsBarGraphData,
    errorLogsGraphData,
    setErrorLogsGraphData,
    traceLogsGraphData,
    setTraceLogsGraphData,
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
};

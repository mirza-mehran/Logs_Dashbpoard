import React from "react";
import { AreaTable } from "../../components";

const TABLE_HEADS = ["Number", "Application Name", "Available", "CPU Usage", "Memory Available", "Disk Space Free", "Server Name"];
const TABLE_DATA = [
    {
      id: 1,
      name: "xyz",
      available: 0,
      cpu_usage: "-1",
      memory_available: "-1",
      space: "-1",
      sr_name: "ibstydasvvdya",
    },
    {
      id: 2,
      name: "abc",
      available: 1,
      cpu_usage: "1",
      memory_available: "1",
      space: "1",
      sr_name: "ggfdgdfgdf",
    },
    {
      id: 3,
      name: "def",
      available: 1,
      cpu_usage: "15",
      memory_available: "150",
      space: "1000",
      sr_name: "qwertyuiop",
    },
    {
      id: 4,
      name: "ghi",
      available: 0,
      cpu_usage: "20",
      memory_available: "300",
      space: "2000",
      sr_name: "asdfghjkl",
    },
   
  ];
function HealthCheckTable() {
  return (
    <AreaTable title="Health Check Logs" tableData={{ TABLE_HEADS, TABLE_DATA }}>
      {TABLE_DATA?.map((dataItem) => {
        return (
            <tr key={dataItem.id}>
            <td>{dataItem.id}</td>
            <td>{dataItem.name}</td>
            <td className={`dt-available-${dataItem.available}`}>{dataItem.available}</td>
            <td>{dataItem.cpu_usage}</td>
            <td>{dataItem.memory_available}</td>
            <td>{dataItem.space}</td>
            <td>{dataItem.sr_name}</td>
          </tr>
        );
      })}
    </AreaTable>
  );
}

export default HealthCheckTable;

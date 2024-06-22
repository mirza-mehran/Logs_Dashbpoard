import React from "react";
import { AreaTable } from "../../components";

const TABLE_HEADS = ["Sr Number",
    "Application Name",
    "Operation ID",
    "No of steps",
    "Total Time Taken(sec)",
    "Server Name"];

const TABLE_DATA = [
        {
          id: 1,
          name: "xyz",
          operation_id: "9A672CB2-B06AAA5AB0F0F",
          no_step: "25",
          total_time: "57",
          sr_name: "ibstydasvvdya",
        },
        {
          id: 2,
          name: "abc",
          operation_id: "7B8F3E64-C12D4E2FBDF1A",
          no_step: "30",
          total_time: "65",
          sr_name: "randomname1",
        },
        {
          id: 3,
          name: "def",
          operation_id: "2C9D5A76-F21D4E6FBFA3B",
          no_step: "28",
          total_time: "70",
          sr_name: "randomname2",
        },
];
function TraceLogsTable() {
    return (
        <AreaTable title="Trace Logs" tableData={{ TABLE_HEADS, TABLE_DATA }}>
            {TABLE_DATA?.map((dataItem) => {
                return (
                    <tr key={dataItem.id}>
                        <td>{dataItem.id}</td>
                        <td>{dataItem.name}</td>
                        <td >{dataItem.operation_id}</td>
                        <td>{dataItem.no_step}</td>
                        <td>{dataItem.total_time}</td>
                        <td>{dataItem.sr_name}</td>
                    </tr>
                );
            })}
        </AreaTable>
    );
}

export default TraceLogsTable;

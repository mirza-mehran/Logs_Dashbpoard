import React from "react";
import { AreaTable } from "../../components";
import { Table, Tag } from 'antd';
import { Link } from "react-router-dom";



const columns = [
    {
        title: 'Sr No',
        dataIndex: 'id',
        key: 'id',
        render: (text, record, index) => index + 1,
        sorter: (a, b) => a.number - b.number,
      },
    {
        title: 'Application Name',
        dataIndex: 'applicationName',
        key: 'applicationName',
    },
    {
        title: 'Operation ID',
        dataIndex: 'operationId',
        key: 'operationId',
        sorter: (a, b) => a.operationId - b.operationId,
    },
    {
        title: 'No of steps',
        dataIndex: 'noOfSteps',
        key: 'noOfSteps',
        render: (text, record) => <Link to={`/traceDeatils/${record.operationId}`}>{text}</Link>,

        sorter: (a, b) => a.noOfSteps - b.noOfSteps,
    },
    {
        title: 'Total Time Taken (sec)',
        dataIndex: 'totalTimeTaken',
        key: 'totalTimeTaken',
        sorter: (a, b) => a.totalTimeTaken - b.totalTimeTaken,
    },
    {
        title: 'Server Name',
        dataIndex: 'serverName',
        key: 'serverName',
    },
];

function TraceLogsTable({ data }) {
    return (
        <section className="content-area-table">
              <div style={{marginBottom:"10px"}}> <h3>Trace Logs</h3></div>
            <Table
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: 5 }}
            />
        </section>
    );
}

export default TraceLogsTable;

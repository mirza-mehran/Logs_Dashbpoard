import { Table } from 'antd';
import React from "react";


const columns = [
    {
        title: 'client ID',
        dataIndex: 'clientID',
        key: 'clientID',
        sorter: (a, b) => a.clientID - b.clientID,
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
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
        sorter: (a, b) => a.duration - b.duration,
    },
   
    {
        title: 'Server Name',
        dataIndex: 'serverName',
        key: 'serverName',
    },
    {
        title: 'Batch ID',
        dataIndex: 'batchId',
        key: 'batchId',
        sorter: (a, b) => a.batchId - b.batchId,
    },
    {
        title: 'Operation Start Date',
        dataIndex: 'operationStartDate',
        key: 'operationStartDate',
        sorter: (a, b) => a.operationStartDate - b.operationStartDate,
    },
    {
        title: 'Operation End Date',
        dataIndex: 'operationEndDate',
        key: 'operationEndDate',
        sorter: (a, b) => a.operationEndDate - b.operationEndDate,
    },
];

function TraceLogsTable({ data }) {
    return (
        <section className="content-area-table">
            <Table
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: 5 }}
            />
        </section>
    );
}

export default TraceLogsTable;

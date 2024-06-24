import React from "react";
import { AreaTable } from "../../components";
import { Table, Tag } from 'antd';
import dayjs from 'dayjs';


// "clientID": 1028,
// "applicationName": "XYZ",
// "operationId": "DW29AB-GIFewsvjO-WOFNA1",
// "createDate": "2024-05-26T00:00:00",
// "duration": 1,
// "serverName": "Inawhfwb01",
// "username": "go_yal",
// "id": "1",
// "batchId": "12",
// "operationStartDate": "2024-05-26T00:00:00",
// "operationEndDate": "2024-05-26T00:00:00"


const columns = [
    {
        title: 'Sr No',
        dataIndex: 'id',
        key: 'id',
        render: (text, record, index) => index + 1,
        sorter: (a, b) => a.number - b.number,
      },
    {
        title: 'Client ID',
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
        title: 'Duration (sec)',
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
        render: (operationStartDate) => dayjs(operationStartDate).format('YYYY-MM-DD HH:mm:ss'),

    },
    {
        title: 'Operation End Date',
        dataIndex: 'operationEndDate',
        key: 'operationEndDate',
        sorter: (a, b) => a.operationEndDate - b.operationEndDate,
        render: (operationEndDate) => dayjs(operationEndDate).format('YYYY-MM-DD HH:mm:ss'),
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

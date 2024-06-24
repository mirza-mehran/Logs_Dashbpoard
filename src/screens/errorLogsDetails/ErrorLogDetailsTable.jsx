import React from 'react'
import { AreaTable } from '../../components';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Table, Tag } from 'antd';


const columns = [
    {
        title: 'client ID',
        dataIndex: 'clientID',
        key: 'clientID',
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
        title: 'Error Details',
        dataIndex: 'errorDetails',
        key: 'errorDetails',
    },
    {
        title: 'Error',
        dataIndex: 'error',
        key: 'error',
    },
    {
        title: 'Serverity',
        dataIndex: 'serverity',
        key: 'serverity',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        sorter: (a, b) => a.totalNoOfErrors - b.totalNoOfErrors,
    },
    {
        title: 'Server Name',
        dataIndex: 'serverName',
        key: 'serverName',
    },
];
function ErrorLogDetailsTable({ data }) {
    return (
        <section className="content-area-table">
            <Table
                dataSource={[...data,...data,...data,...data]}
                columns={columns}
                pagination={{ pageSize: 5 }}
            />
        </section>
    )
}
export default ErrorLogDetailsTable
import React from 'react'
import { AreaTable } from '../../components';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Table, Tag } from 'antd';


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
        title: 'Error',
        dataIndex: 'error',
        key: 'error',
    },
    {
        title: 'Error Details',
        dataIndex: 'errorDetails',
        key: 'errorDetails',
    },
    {
        title: 'Serverity',
        dataIndex: 'serverity',
        key: 'serverity',
        render: (available) => {
            let color;
            switch (available) {
                case 1:
                    color = 'green';
                    break;
                case 2:
                    color = 'yellow';
                    break;
                case 3:
                    color = 'red';
                    break;
                default:
                    color = 'gray'; // Default color if needed
            }
    
            return <Tag color={color}>{available}</Tag>;
        },
    },

    {
        title: 'Server Name',
        dataIndex: 'serverName',
        key: 'serverName',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        sorter: (a, b) => a.totalNoOfErrors - b.totalNoOfErrors,
    },
];
function ErrorLogDetailsTable({ data }) {
    return (
        <section className="content-area-table">
            <Table
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: 5 }}
            />
        </section>
    )
}
export default ErrorLogDetailsTable
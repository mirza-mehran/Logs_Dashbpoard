import React from 'react'
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  
    {
        title: 'Application Name',
        dataIndex: 'applicationName',
        key: 'applicationName',
    },
    {
        title: 'Total no of error',
        dataIndex: 'totalNoOfErrors',
        key: 'totalNoOfErrors',
        render: (text, record) => <Link to={`/errorDeatils/${record.applicationName}`}>{text}</Link>,
        sorter: (a, b) => a.totalNoOfErrors - b.totalNoOfErrors,
    },
    {
        title: 'Server Name',
        dataIndex: 'serverName',
        key: 'serverName',
    },
];
function ErrorLogTable({ data }) {
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
export default ErrorLogTable
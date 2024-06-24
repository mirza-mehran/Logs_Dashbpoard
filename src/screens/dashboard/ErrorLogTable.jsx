import React from 'react'
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';

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
        title: 'Total no of errors',
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
            <div style={{marginBottom:"10px"}}> <h3>Error Logs</h3></div>
            <Table
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: 5 }}
            />
        </section>
    )
}
export default ErrorLogTable
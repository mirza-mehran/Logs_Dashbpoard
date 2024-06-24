import React from 'react';
import { Table, Tag } from 'antd';
import dayjs from 'dayjs';

const columns = [
  {
    title: 'Number',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: 'Application Name',
    dataIndex: 'applicationName',
    key: 'applicationName',
  },
  {
    title: 'createDate',
    dataIndex: 'createDate',
    key: 'createDate',
    render: (createDate) => (
      <span> {dayjs(createDate)?.format('YYYY-MM-DD')}</span>
    ),
  },
  {
    title: 'Available',
    dataIndex: 'isAvailable',
    key: 'isAvailable',
    render: (available) => (
      <Tag color={available ? 'green' : 'red'}>{available}</Tag>
    ),
    sorter: (a, b) => a.available - b.available,
  },
  {
    title: 'CPU Usage',
    dataIndex: 'cpuUsage',
    key: 'cpuUsage',
    sorter: (a, b) => a.cpuUsage - b.cpuUsage,
  },
  {
    title: 'Memory Available',
    dataIndex: 'memoryAvailableInMB',
    key: 'memoryAvailableInMB',
    sorter: (a, b) => a.memoryAvailableInMB - b.memoryAvailableInMB,
  },
  {
    title: 'Disk Space Free',
    dataIndex: 'diskSpaceFreeInMB',
    key: 'diskSpaceFreeInMB',
    sorter: (a, b) => a.diskSpaceFreeInMB - b.diskSpaceFreeInMB,
  },
  {
    title: 'Server Name',
    dataIndex: 'serverName',
    key: 'serverName',
  },
  {
    title: 'UserName',
    dataIndex: 'username',
    key: 'username',
  },
];

const App = ({data}) => (
  <section className="content-area-table">
  <Table
    dataSource={data}
    columns={columns}
    pagination={{ pageSize: 5 }}
  />
  </section>
);

export default App;
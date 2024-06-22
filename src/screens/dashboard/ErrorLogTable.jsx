import React from 'react'
import { AreaTable } from '../../components';
import { Link } from 'react-router-dom';

const TABLE_HEADS = [
    "Sr Number",
    "Application Name",
    "Total no of errors",
    "Server Name"];

const TABLE_DATA = [
    {
        id: 1,
        name: "xyz",
        available: 0,
        cpu_usage: "-1",
        memory_available: "-1",
        total_no_errors: "-1",
        sr_name: "ibstydasvvdya",
    },
    {
        id: 2,
        name: "abc",
        available: 1,
        cpu_usage: "1",
        memory_available: "1",
        total_no_errors: "1",
        sr_name: "ggfdgdfgdf",
    },
    {
        id: 3,
        name: "def",
        available: 1,
        cpu_usage: "15",
        memory_available: "150",
        total_no_errors: "1000",
        sr_name: "qwertyuiop",
    },
    {
        id: 4,
        name: "ghi",
        available: 0,
        cpu_usage: "20",
        memory_available: "300",
        total_no_errors: "2000",
        sr_name: "asdfghjkl",
    },
];

function ErrorLogTable() {
    return (
        <AreaTable title="Error Logs" tableData={{ TABLE_HEADS }} >
            {TABLE_DATA?.map((dataItem) => {
                return (
                    <tr key={dataItem.id}>
                        <td>{dataItem.id}</td>
                        <td>{dataItem.name}</td>
                        <td><div>
                            {dataItem?.total_no_errors > 100 ?
                                <Link to="/view" className="table_link">
                                    {dataItem.total_no_errors}
                                </Link> :
                                <span>{dataItem.total_no_errors}</span>}
                        </div></td>
                        <td>{dataItem.sr_name}</td>
                    </tr>
                );
            })}
        </AreaTable>
    )
}

export default ErrorLogTable
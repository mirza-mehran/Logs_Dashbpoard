import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";



const AreaTable = ({ title, tableData, children }) => {
  const { TABLE_DATA, TABLE_HEADS } = tableData
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">{title || "Logs"}</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;

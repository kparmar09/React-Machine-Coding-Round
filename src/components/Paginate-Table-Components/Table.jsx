import React from "react";
import PaginateTableData from "../../public/PaginateTableData";

function Table() {
  const [tableData, setTableData] = React.useState(PaginateTableData);

  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead style={{ textAlign: "left", border: "1px solid black" }}>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price</th>
            <th>Validity/Expiry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              {/* <td>
                <img src={item.imageUrl} alt={item.title} />
              </td> */}
              <td>{item.title}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.price}</td>
              <td>{item.validityExpiry}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

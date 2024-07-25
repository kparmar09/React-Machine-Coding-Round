import React, { useEffect } from "react";
import PaginateTableData from "../../public/PaginateTableData";

function Table({ search }) {
  const numArr = [3, 4, 5, 6, 7, 8, 9, 10];
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [lastIndex, setLastIndex] = React.useState(0);
  const [tableData, setTableData] = React.useState(
    PaginateTableData.slice(0, rowsPerPage)
  );

  const handleSelect = (e) => {
    const newRowsPerPage = Number(e.target.value);
    setRowsPerPage(newRowsPerPage);
    const temp = PaginateTableData.slice(0, newRowsPerPage);
    setTableData(temp);
  };

  const handleNext = () => {
    setLastIndex((prevLastIndex) => {
      const newLastIndex = prevLastIndex + rowsPerPage;
      const temp = PaginateTableData.slice(prevLastIndex, newLastIndex);
      setTableData(temp);
      return newLastIndex;
    });
  };

  const handlePrev = () => {
    setLastIndex((prevLastIndex) => {
      const newLastIndex = prevLastIndex - rowsPerPage;
      const temp = PaginateTableData.slice(newLastIndex, prevLastIndex);
      setTableData(temp);
      return newLastIndex;
    });
  };

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead
            style={{
              textAlign: "left",
            }}
          >
            <tr>
              <th style={{ padding: "8px", border: "1px solid black" }}>
                Title
              </th>
              <th style={{ padding: "8px", border: "1px solid black" }}>
                Start Date
              </th>
              <th style={{ padding: "8px", border: "1px solid black" }}>
                End Date
              </th>
              <th style={{ padding: "8px", border: "1px solid black" }}>
                Price
              </th>
              <th style={{ padding: "8px", border: "1px solid black" }}>
                Validity/Expiry
              </th>
              <th style={{ padding: "8px", border: "1px solid black" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: "8px", borderRight: "1px solid black" }}>
                  <div className="flex flex-row items-center">
                    <img
                      src={item.imageUrl}
                      className="border rounded-xl"
                      alt={item.title}
                    />
                    <h1 className="ml-4">{item.title}</h1>
                  </div>
                </td>
                <td style={{ padding: "8px", borderRight: "1px solid black" }}>
                  {item.startDate}
                </td>
                <td style={{ padding: "8px", borderRight: "1px solid black" }}>
                  {item.endDate}
                </td>
                <td style={{ padding: "8px", borderRight: "1px solid black" }}>
                  {item.price}
                </td>
                <td style={{ padding: "8px", borderRight: "1px solid black" }}>
                  {item.validityExpiry}
                </td>
                <td style={{ padding: "8px" }}>
                  <h1 className="font-normal p-1">
                    <span
                      className="p-2 rounded-lg"
                      style={
                        item.status === "Published"
                          ? { backgroundColor: "#DBFFCE" }
                          : { backgroundColor: "#A4A4A4" }
                      }
                    >
                      {item.status}
                    </span>
                  </h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <select className="mr-3" onChange={(e) => handleSelect(e)}>
          {numArr.map((num, index) => (
            <option key={index}>{num}</option>
          ))}
        </select>
        <button onClick={handlePrev} className="mr-3">
          Prev
        </button>
        <button onClick={handleNext} className="mr-3">
          Next
        </button>
      </div>
    </>
  );
}

export default Table;

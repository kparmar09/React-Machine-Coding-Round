import React from "react";

function Table() {
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Title</th>
            <th style={{ width: "50%" }}>Title</th>
            <th style={{ width: "20%" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Title</td>
            <td style={{ width: "50%" }}>Title</td>
            <td style={{ width: "20%" }}>Title</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Title</td>
            <td style={{ width: "50%" }}>Title</td>
            <td style={{ width: "20%" }}>Title</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

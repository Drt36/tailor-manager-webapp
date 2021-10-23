import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div>
      <table className="table">
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
        <TableRow />
      </table>
    </div>
  );
};

export default Table;

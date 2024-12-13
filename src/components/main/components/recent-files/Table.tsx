import "./Table.css";

import { RiMoreLine } from "@remixicon/react";

export const Table = () => {
  return (
    <table>
      <tr className="table__header">
        <th>Name</th>
        <th>Members</th>
        <th>Last Modified</th>
        <th></th>
      </tr>
      <tr>
        <td>
          <div className="square" style={{ backgroundColor: "#FF6860" }} />
          <p>Travel Landing Page</p>
        </td>
        <td>5 members</td>
        <td>
          <span className="table__month">Mar 8,</span> 2020{" "}
        </td>
        <td>
          <RiMoreLine size={15} />
        </td>
      </tr>
      <tr>
        <td>
          <div className="square" style={{ backgroundColor: "#4AC29D" }} />
          <p>True Photes</p>
        </td>
        <td>12 members</td>
        <td>
          <span className="table__month">Mar 8,</span> 2020{" "}
        </td>
        <td>
          <RiMoreLine size={15} />
        </td>
      </tr>
      <tr>
        <td>
          <div className="square" style={{ backgroundColor: "#FF9F00" }} />
          <p>Dashboard Structure</p>
        </td>
        <td>10 members</td>
        <td>
          <span className="table__month">Mar 9,</span> 2020{" "}
        </td>
        <td>
          <RiMoreLine size={15} />
        </td>
      </tr>
      <tr>
        <td>
          <div className="square" style={{ backgroundColor: "#FF6860" }} />
          <p>Character ilustration</p>
        </td>
        <td>3 members</td>
        <td>
          <span className="table__month">Mar 10,</span> 2020{" "}
        </td>
        <td>
          <RiMoreLine size={15} />
        </td>
      </tr>
    </table>
  );
};

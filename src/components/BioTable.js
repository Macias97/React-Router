import React from "react";
import "../styles/Bio.scss";

const BioTable = (props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <td>{props.name}</td>
      </tr>
      <br></br>
      <tr>
        <th>Surname</th>
        <td>{props.surname}</td>
      </tr>
      <br></br>
      <tr>
        <th>Age</th>
        <td>{props.age}</td>
      </tr>
      <br></br>
      <tr>
        <th>Graduate</th>
        <td>{props.school}</td>
      </tr>
    </table>
  );
};

export default BioTable;

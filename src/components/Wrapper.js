import React from "react";

function Wrapper(props) {
  return (
    <>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Department</th>
      </tr>


      <div >{props.children}</div>
    </>
  );
}

export default Wrapper;

import React from "react";

function SearchResults(props) {
  return (
    <table>
          <tbody>
          <tr>
             <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
          </tr>

              <tr>
                  <td > { props.id } </td>
                  <td > { props.first } </td>
                  <td > { props.last } </td>
                  <td > { props.department } </td>
              </tr>        
                
      </tbody>
      </table>
  );
}

export default SearchResults;

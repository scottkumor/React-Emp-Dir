import React, { Component } from "react";

function Table(props) {
  return (

    <table>
      <tbody>
        <tr>
          <td > {props.id} </td>
          <td > {props.first} </td>
          <td > {props.last} </td>
          <td > {props.department} </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;



// handleInputChange = event => {
//   // Getting the value and name of the input which triggered the change
//   let value = event.target.value;
//   const name = event.target.name;

//   if (name === "password") {
//     value = value.substring(0, 15);
//   }
//   // Updating the input's state
//   this.setState({
//     [name]: value
//   });
// };

// return (
//   <div className="card">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//     <div className="content">
//       <ul>
//         <li>
//           <strong>Name:</strong> {props.name}
//         </li>
//         <li>
//           <strong>Occupation:</strong> {props.occupation}
//         </li>
//         <li>
//           <strong>Location:</strong> {props.location}
//         </li>
//       </ul>
//     </div>
//     <span onClick={() => props.removeFriend(props.id)} className="remove">
//       𝘅
//     </span>
//   </div>
// );

// class Table extends Component {

//   state = {
//     employees
//   };

//   // When the component mounts, render table
//   // componentDidMount() {

//   // }

//   handleInputChange = event => {
//     this.setState({ employees: event.target.value });
//   };

//   render() {
//     return (
//       <Wrapper>
//         {this.state.employees.map(employee => (
//           <Table
//             id={employees.id}
//             key={employees.id}
//             first={employees.name}
//             last={employees.image}
//             department={employees.department}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
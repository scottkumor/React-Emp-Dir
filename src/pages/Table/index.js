import React, { Component } from "react";
import DB from './../../utils/DB'
import Container from "./../../components/Container";
import SearchForm from "./../../components/SearchForm";
import SearchResults from "./../../components/SearchResults";


class Table extends Component {

  state = {
    id: 1,
    first: "Michael",
    last: "Smith",
    department: 1
  };

  // When the component mounts, update the title to be Wikipedia Searcher
  componentDidMount() {

  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.search) {
      return;
    }
    DB.searchTerms(this.state.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({
          id: res.data[1],
          first: res.data[2][0],
          last: res.data[3][0],
          department: res.data[4][0]
        });
      })
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1>Search For An Employee</h1>
          {/* <Alert type="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
            {this.state.error}
          </Alert> */}
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.search}
          />
          <SearchResults
            id={this.state.id}
            first={this.state.first}
            last={this.state.last}
            department = {this.state.department}
          />
        </Container>
      </div>
    );
  }
}

export default Table;


// function Table(props) {
//   const allEmps = props.Employees;
//   return (

//       <table>
//           <tbody>
//           <tr>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Department</th>
//           </tr>

//           { allEmps.map(emp => (
//               <tr>
//                   <td > { emp.id } </td>
//                   <td > { emp.first } </td>
//                   <td > { emp.last } </td>
//                   <td > { emp.department } </td>
//               </tr>        
//                   )
//           )
//       }
//       </tbody>
//       </table>
//   )
// }

// export default Table;
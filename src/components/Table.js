import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    }
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeLast = this.handleChangeLast.bind(this);
    this.handleChangeDept = this.handleChangeDept.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.employees
    });
  }

  handleChangeFirst(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.employees;

      // Use .filter() to determine which employees should be displayed
      // based on the search terms
      newList = currentList.filter(employee => {
        // change current employee to lowercase
        const lc = employee.first.toString().toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toString().toLowerCase();
        // check to see if the current list employee includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.employees;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  handleChangeLast(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.employees;

      // Use .filter() to determine which employees should be displayed
      // based on the search terms
      newList = currentList.filter(employee => {
        // change current employee to lowercase
        const lc = employee.last.toString().toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toString().toLowerCase();
        // check to see if the current list employee includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.employees;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
  
  handleChangeDept(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.employees;

      // Use .filter() to determine which employees should be displayed
      // based on the search terms
      newList = currentList.filter(employee => {
        // change current employee to lowercase
        const lc = employee.department.toString().toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toString().toLowerCase();
        // check to see if the current list employee includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.employees;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }



  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChangeFirst} placeholder="Search by First Name..." />
        <input type="text" onChange={this.handleChangeLast} placeholder="Search by Last Name..." />
        <input type="text" onChange={this.handleChangeDept} placeholder="Search by Department..." />
        <table>
        <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.filtered.map(employee => (
                <tr>
                  <td>{employee.id}</td>
                  <td>{employee.first}</td>
                  <td>{employee.last}</td>
                  <td>{employee.department}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
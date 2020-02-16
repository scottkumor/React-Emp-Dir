import React, { Component } from 'react';
import Table from './pages/Table/index'
import Wrapper from './components/Wrapper/index.js'

import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  render() {
    return (
      <>

        <Wrapper>
        {/*Map over this.state.employees and render a table 
        row form the Table component for each employee object */}

          {this.state.employees.map(employee => (
            <Table
              id={employee.id}
              key={employee.id}
              first={employee.first}
              last={employee.last}
              department={employee.department}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;

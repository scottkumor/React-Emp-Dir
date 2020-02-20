import React, { Component } from 'react';
import Table from './components/Table';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: [
        {
          "id": 1,
          "first": "Michael",
          "last": "Smith",
          "department": "Accounting"
        },
        {
          "id": 2,
          "first": "John",
          "last": "Doe",
          "department": "Advertising"
        },
        {
          "id": 3,
          "first": "Jane",
          "last": "Brown",
          "department": "Account Manager"
        },
        {
          "id": 4,
          "first": "Peggy",
          "last": "Johnson",
          "department": "Accounting"
        },
        {
          "id": 5,
          "first": "Jacob",
          "last": "Washington",
          "department": "Sales"
        },
        {
          "id": 6,
          "first": "Harold",
          "last": "Hawk",
          "department": "Sales"
        },
        {
          "id": 7,
          "first": "Mindy",
          "last": "Shaw",
          "department": "Information Technology"
        },
        {
          "id": 8,
          "first": "Nicholas",
          "last": "McMann",
          "department": "Information Technology"
        },
        {
          "id": 9,
          "first": "Rory",
          "last": "Hale",
          "department": "Information Technology"
        },
        {
          "id": 10,
          "first": "Janet",
          "last": "Smith",
          "department": "VP Operations"
        },
        {
          "id": 11,
          "first": "Michael",
          "last": "Lassetter",
          "department": "VP Sales"
        },
        {
          "id": 12,
          "first": "Vincente",
          "last": "De la Sol",
          "department": "Chief Executive Officer"
        }
      ]
    };
  }

  render() {
    return (
      <section>
        <h1>Employee Directory</h1>
        <h2>Please choose one category to search by.</h2>
        <p>Searching with multiple fields may not yield desired results.</p>
        <Table employees={this.state.employees} />
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Table from './components/Table'
import Employees from './employees'


function App() {

  return (
    <>

        <Table Employees={Employees} />

    </>
  );
}

export default App;
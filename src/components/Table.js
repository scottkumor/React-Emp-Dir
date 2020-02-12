import React, { Component } from 'react'
import Employees from './../employees'

function Table(props) {
    const allEmps = props.Employees;
    return (

        <table>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
            </tr>

            { allEmps.map(emp => (
                <tr>
                    <td key={ emp.id }>{ emp.id } </td>
                    <td key={ emp.id }>{ emp.first }</td>
                    <td key={ emp.id }>{ emp.last }</td>
                    <td key={ emp.id }>{ emp.department }</td>
                </tr>        
                    )
            )
        }
        </table>
    )
}

export default Table;
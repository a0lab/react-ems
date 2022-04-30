import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

export class ListEmployee extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      employees: []
    }
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id){
    EmployeeService.deleteEmployee(id).then( res => {
        this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });
}

  componentDidMount() {
    EmployeeService.getEmployees().then((response) => {
      this.setState({
        employees: response.data
      });
    })
  }

  addEmployee = () => {
    //alert('Add employee');
    this.setState( {
      employees: []
    });
  }

  render() {
    return (
      <div>
        <h2>Employee List</h2>
        
        <table className="table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
    <tbody>
      {
          this.state.employees.map (
            employee => 
              <tr key = {employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                <button className="btn btn-info">Edit</button>
                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
            </td>
        </tr>
            
          )
      }
        
    </tbody>
    </table>
      </div>
    )
  }
}

export default ListEmployee
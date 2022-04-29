import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate } from 'react-router-dom';

export class AddEmployee extends Component {
  constructor(props) {
    super(props)
    
  
    this.state = {
      firstName: '',
      lastName: '',
      emailId: ''
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
  }

changeFirstNameHandler= (event) => {
    this.setState({firstName: event.target.value});
}

changeLastNameHandler= (event) => {
    this.setState({lastName: event.target.value});
}

changeEmailHandler= (event) => {
    this.setState({emailId: event.target.value});
}


addEmployee = (e) => {
  const { navigate } = this.props;
  e.preventDefault();
  //const {firstName, lastName, emailId } = this.state;
  let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
  console.log('employee => ' + JSON.stringify(employee));

      EmployeeService.addEmployee(employee).then(res =>{        
        navigate("../../employees");
      });
}

  render() {
    return (
      <div>
        <div className = "container">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                  <div className='card-header'>Add New Employee</div>
                    <div className = "card-body">
                        <form>
                            <div className = "form-group">
                                <label> First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control" 
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <div className = "form-group">
                                <label> Last Name: </label>
                                <input placeholder="Last Name" name="lastName" className="form-control" 
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <div className = "form-group">
                                <label> Email Id: </label>
                                <input placeholder="Email Address" name="emailId" className="form-control" 
                                    value={this.state.emailId} onChange={this.changeEmailHandler}/>
                            </div>

                            <button className="btn btn-success" onClick={this.addEmployee}>Save</button>                          
                            <Link to='/employees' className="btn btn-danger" > Cancel using link</Link>
                        </form>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default function(props) {
  const navigate = useNavigate();

  return <AddEmployee {...props} navigate={navigate} />;
}

// export default AddEmployee
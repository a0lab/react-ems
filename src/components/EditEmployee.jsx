import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate, useParams } from 'react-router-dom';

export class EditEmployeeClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: ''
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  componentDidMount(){
    EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
        let employee = res.data;
        this.setState({firstName: employee.firstName,
            lastName: employee.lastName,
            emailId : employee.emailId
        });
    });
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


updateEmployee = (e) => {
  const { navigate } = this.props;
  e.preventDefault();
  //const {firstName, lastName, emailId } = this.state;
  let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
  console.log('employee => ' + JSON.stringify(employee));

      EmployeeService.updateEmployee(employee,this.state.id).then(res =>{        
        navigate("../..");
      });
}

  render() {
    return (
      <div>
        <div className = "container">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                  <div className='card-header'>Edit Employee</div>
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

                            <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>                          
                            <Link style={{marginLeft: "10px"}}  to='/employees' className="btn btn-danger" > Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

// todoeslint-disable-next-line
export default function EditEmployee(props) {
  const navigate = useNavigate();
  // const params = useParams;
  const match = { params: useParams() };

  return <EditEmployeeClass {...props} navigate={navigate} match={match}/>;
}

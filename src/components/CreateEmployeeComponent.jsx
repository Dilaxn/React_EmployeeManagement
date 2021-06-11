import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);

    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        } else {
            EmployeeService.getEmployee(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                })
            })
        }
    }

    saveEmployee = (event) => {
        event.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log(employee);
        // eslint-disable-next-line no-undef
        if (this.state.id == -1) {
            EmployeeService.createEmployee(employee).then(() => {
                this.props.history.push("/employees");

            })
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
                this.props.history.push("/employees")
            })
        }

    }

    cancel() {
        this.props.history.push("/employees");
    }

    changeFirstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }
    changeLastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }
    changeEmailHandler = (event) => {
        this.setState({
            emailId: event.target.value
        });
    }
    getTitle = () => {
        if (this.state.id == -1) {
            return <h3 className="text-center"> Add Employee</h3>

        } else {
            return <h3 className="text-center"> Update Employee</h3>

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 card offset-md-3">
                        {this.getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="First Name" type="text" className="form-control"
                                           value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" type="text" className="form-control"
                                           value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    <label>Email Id</label>
                                    <input placeholder="Email Id" type="text" className="form-control"
                                           value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;
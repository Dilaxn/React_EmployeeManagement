import React, {Component} from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee= this.addEmployee.bind(this)
        this.editEmployee=this.editEmployee.bind(this)
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee')
    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`)
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.addEmployee}>Add Employee</button>
                </div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email ID</th>
                            <th>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={()=>{
                                                this.editEmployee(employee.id)
                                            }}>Update</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

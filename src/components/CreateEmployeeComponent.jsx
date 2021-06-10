import React, {Component} from 'react';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);

    }
    saveEmployee=(event) => {
        event.preventDefault();
        let employee= {firstName: this.state.firstName, lastName: this.state.lastName,emailId:this.state.emailId};
        console.log(employee);
    }
    cancel(){
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 card offset-md-3">
                        <h3 className="text-center"> Add Employee</h3>
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
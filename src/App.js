import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">

                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={ListEmployeeComponent}/>
                            <Route path="/employees" component={ListEmployeeComponent}/>
                            // here we r using same component for creation and update
                            <Route path="/add-employee/:id" component={CreateEmployeeComponent}/>

                            {/*<Route path="/update-employee/:id" component={UpdateEmployeeComponent}/>*/}


                        </Switch>
                    </div>
                    {/*<FooterComponent/>*/}
                </div>
            </Router>
        </div>
    );
}

export default App;

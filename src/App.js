import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <div className="container">
                    <HeaderComponent/>
                    <div className="container">
                        <Switch>
                            <Route path="/" component={ListEmployeeComponent}/>
                            <Route path="/employees" component={ListEmployeeComponent}/>
                        </Switch>
                    </div>
                    <FooterComponent/>
                </div>
            </Router>
        </div>
    );
}

export default App;

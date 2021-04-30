import './App.css';
import { Route, Switch } from "react-router-dom";
import Posts from "./components/posts";
import {Redirect} from 'react-router'
import Home from "./components/home";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";

function App() {
    return (
        <div className="container-fluid">
            <NavBar />
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route path="/posts"
                               render={props => <Posts sortBy="newest" {...props} />}
                        />
                        <Route path="/" exact component={Home} />
                        <Route path="/not-found" exact component={NotFound}/>
                        <Redirect to="/not-fount"/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;

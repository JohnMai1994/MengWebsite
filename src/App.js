import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from "styled-components"

import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";


const Body = styled.div`
overflow: hidden;
    background: #fff;
    min-height: 100vh;

`


function App() {


    return (
        <Body>
            <Router>

                <NavBar/>

                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/contact"} component={Contact}/>
                    <Route path={"/project"} component={Project}/>
                </Switch>
            </Router>
        </Body>

    );
}


const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>

    )
}

export default App;

import {useState} from "react";
// const React = require("react");

import Navbar from "./components/navbar.js";
import SigninForm from "./components/signinForm";
import SignupForm from "./components/signupForm";


let viewList = {
    "Navbar": Navbar,
    "SigninForm": SigninForm,
    "SignupForm": SignupForm
};

function Container(props) {
    return (
        <div className="container">

            <a href="/chat">
                <button className="col btn-pers">Join Chat</button>
            </a>

            <div className="row">
                <button name="SigninForm" onClick={props.onClick} className="col btn-pers outline m-3">Signin</button>
                <button name="SignupForm" onClick={props.onClick} className="col btn-pers outline m-3">Signup</button>
            </div>
        </div>
    )
}

function Home() {
    let [state, setState] = useState({currentView: Container});

    function handleClick(e) {
        let newView = viewList[e.target.name];
        setState({currentView: newView})
    }

    return (
        <div id="home-page">
            <div className="bg-transparent--60 height-full">
                <Navbar />
                <div className="align-center" style={{height: "100%"}}>
                    <state.currentView onClick={handleClick}/>
                </div>
            </div>
        </div>
  );
}

export default Home;

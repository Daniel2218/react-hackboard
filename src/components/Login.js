import React from 'react';
import ReactDOM from "react-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grandParentContaniner">
          <div className="parentContainer">
              <form id="loginForm">
                  <a target="_blank" href="http://qhacks.io/"><img id="imgid" src={require("../images/logo.png")} alt="myHackathon logo" className="hvr-grow" ></img></a>
                  <input className="loginInput" type="text" name="email" placeholder="Email" autocorrect autocapitalize autofocus />
                  <br />
                  <input className="loginInput" type="text" name="password" placeHolder="Password" autocorrect autocapitalize />
                  <br />
                  <input className="loginInput" type="submit" onClick="" className="hv-grow" value="Log In" />
              </form>
          </div>
      </div>
    );
  }
}

export default Login;

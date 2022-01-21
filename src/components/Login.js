import React, { Component } from 'react';
import Banner from './Banner';
import {Link} from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props);
    }
    state={
        loginid : "",
        pwd: ""
    }

    handleloginIDChange=(event)=>{
        this.setState({
            loginid:event.target.value
        })
    }

    
    handlepwdChange=(event)=>{
        this.setState({
            pwd:event.target.value
        })
    }


    onLoginClick(){
      
    }
  render() {
    return (
      <div> 
      <center>      <Banner title="Login Page" subtitle="Not a User yet?">
      <Link to="/register" className="btn-primary">Click here to Register</Link><br/><br/>
      <label htmlFor="loginid"> Login ID : 
      <input type="text" id="loginid" onChange={this.handleloginIDChange.bind(this)}/>
      </label><br/><br/>

      <label htmlFor="pwd"> Password : 
      <input type="text" id="pwd" onChange={this.handlepwdChange.bind(this)}/>
      </label><br/><br/>

      <button className="btn-primary" >Login</button>

      </Banner>
      </center>

      </div>
    );
  }
}

import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import Login from './Login';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            fname:"Abc",
            lname:"Pqr",
            email:"abc@",
            password:"123",
            loginid:"",
            pwd:""
        }
      
      
    }

 
  handlefnameChange=event=>{
        this.setState({
            fname:event.target.value
        })
  }

  handlelnameChange=event=>{
    this.setState({
        lname:event.target.value
    })
}

handleemailChange=(emailId)=>{
    this.setState({
        emailId:this.state.email
    })
}

handlePwdChange=(passwordset)=>{
    this.setState({
        passwordset:this.state.password
    })
}

  onSubmitClick=(event)=> {
      alert(`${this.state.fname} ${this.state.lname} ${this.state.email} ${this.state.password}`);
      
  }

  

    render() { 
        return ( 
            <div className="bg">
            
            <center>
            <Banner title="Registration Form" subtitle="Fill all the details below">
           
            <label htmlFor="fname"> First Name : 
            <input type="text" id="fname" onChange={this.handlefnameChange.bind(this)}/>
            </label><br/><br/>

            <label htmlFor="lname"> Last Name : 
            <input type="text" id="lname" onChange={this.handlelnameChange.bind(this)}/>
            </label><br/><br/>

            <label htmlFor="email"> Email ID : 
            <input type="text" id="email" onChange={this.handleemailChange.bind(this)}/>
            </label><br/><br/>

            <label htmlFor="password"> Password : 
            <input type="password" id="password" onChange={this.handlePwdChange.bind(this)}/>
            </label><br/><br/>

            <button type="submit" className="btn-primary" onClick={this.onSubmitClick.bind(this)}>Submit</button><br/>
            <br/>
            <Link to="/login" className="btn-primary">Click here to Login</Link>
            
           
            </Banner></center>

            </div>
         );
    }
}
 
export default Register ;
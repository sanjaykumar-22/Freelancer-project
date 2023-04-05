import React from "react";
import { Redirect } from "react-router-dom";
// import { Layout } from "./Layout";
// import SignUp from "./signup";
import { connect } from 'react-redux';
import { post, API_URL } from "../actions/baseAction";

class LogIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isAuthenticated: false
      }
   }
   handleLoginClick = (event) => {
      this.props.handleLoginClick(this.props.user);
   }

   render() { 
      if(this.props.message && this.props.message === "Login successfull"){
         return (<Redirect to="/" />);
      }

      return ( 
      <div className="signup-form" style={{backgroundColor:"white", color: "black", height:"400px", padding:"20px", borderRadius:"5px", width: "350px"}}>    
      
         <center><img src="images/avatar.png" width="40%"  style={{borderRadius:"50%"}} alt=""/></center><br/>
         <div className="form-group">                  
            <input type="text" value={this.props.user.username} onChange={this.props.usernameHandleChange} className="form-control" placeholder="User Name" id="username" name="username" required/>
         </div>
         <div className="form-group">                  
            <input type="password" value={this.props.user.password} onChange={this.props.passwordHandleChange} className="form-control" placeholder="Password" id="password" name="password" required/>
         </div>
         <div className="form-group">               
            <input type="submit" value="LogIn" onClick={this.handleLoginClick} className="btn btn-primary" /> &nbsp;&nbsp; Don't have account? <a className="btn btn-outline-primary" href="/signup"><b>Sign Up</b></a>
         </div>   
         <div className="form-group">  
            <span id="message" name="message">{
               this.props.messageLog && this.props.messageLog.message 
               ? this.props.messageLog.message : null
            }</span>
         </div>                 
      </div> 
      );
   }
}

function mapStateToProps(state) {
   return {
      countries: state.countryReducer.countries,
      isAuthorized: state.userReducer.isAuthorized,
      user: state.userReducer.user,
      messageLog: state.userReducer.messageLog
   };
}

function mapDispatchToProps(dispatch) {
   return {      
      handleLoginClick: (user) => { 
         //Validation check if username & password entered or NOT?         
         if(!(user.username && user.password)) {
            alert("Please enter Username and Password!!");
            return;
         }

         return post(`${API_URL}/login`, user)
            .then((result) => {
               console.log("Login got result", result);
               if(result.loggedInUser){
                  dispatch({ type: "LOGIN-USER", payload: result.loggedInUser });
               } else {
                  dispatch({ type: "LOGIN-USER", payload: result });
               }
               
            })
            .catch((err) => {
               console.log('./src/pages/login.js => mapDispatchToProps => postLogin()', err);
            })         
      },
      usernameHandleChange: (e) => {
         const action = { type: "LOGIN-USERNAME", payload: e.target.value };
         dispatch(action);
     },
     passwordHandleChange: (e) => {
        const action = { type: "LOGIN-PASSWORD", payload: e.target.value };
        dispatch(action);
    }
   };
}

export default connect(
   mapStateToProps, mapDispatchToProps
)(LogIn);
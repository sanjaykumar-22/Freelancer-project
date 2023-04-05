import React, { Component } from 'react';
import MainNavigation from "../components/MainNavigation";
import { connect } from 'react-redux';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return ( <>
      <MainNavigation/>
      
      <div className="signup-form" style={{backgroundColor:"white", color: "black", height:"500px", padding:"20px", borderRadius:"5px"}}>    
      <h1>User Profile</h1>     
         <div className="form-row">
            <div className="form-group col-md-12"> 
            Username: <label className="form-control"> {this.props.user.username}</label>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-12"> 
            Email: <label className="form-control"> {this.props.user.email}</label>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-12"> 
            First Name:<label className="form-control"> {this.props.user.firstname}, Last Name: {this.props.user.lastname}</label>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-12"> 
            Gender: <label className="form-control"> {this.props.user.gender}</label>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-12"> 
            Country: <label className="form-control"> {this.props.user.country}</label>
            </div>            
         </div>

      </div>
      </> );
   }
}

function mapStateToProps(state) {
   return {
      user: state.userReducer.user
   };
}

export default connect(
   mapStateToProps,
)(Dashboard);
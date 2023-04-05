import React from "react";
import { connect } from 'react-redux';
import Dashboard from "./dashboard";
import LogIn from "./login";

class Layout extends React.Component {   
   constructor(props) {
      super(props);
      this.state = {}
   }
   
   render() {
      //console.log(this.props.isAuthorized);
      return (
         this.props.isAuthorized  ? 
         <Dashboard isAuthorized={this.props.isAuthorized}/> :       
         <LogIn />
      );   
   }
}

function mapStateToProps(state) {
   return {      
      isAuthorized: state.userReducer.isAuthorized,
   };
}

export default connect(
   mapStateToProps,
)(Layout);
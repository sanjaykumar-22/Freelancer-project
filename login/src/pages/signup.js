import React from 'react';
import { connect } from 'react-redux';
import {get, API_URL} from "../actions/baseAction";

class SignUp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }

   handleClickTest = () => {
      console.log("Is Authorized", this.props.isAuthorized);
      this.props.signUp();
      console.log("Is Authorized", this.props.isAuthorized);
   }

   componentDidMount() {
      //console.log("Is Authorized", this.props.isAuthorized);
      //console.log(this.props);
      //If country not loaded already, then load first time      
      if(this.props.countries && this.props.countries.length === 0) {
         this.props.getCountries();
      }
   }

   render() { 
      return ( 
      <div className="signup-form" style={{backgroundColor:"white", color: "black", height:"500px", padding:"20px", borderRadius:"5px"}}>    
      <h1>Sign Up</h1>     
         <div className="form-row">
            <div className="form-group col-md-12"> 
               <input type="text" className="form-control" placeholder="User Name" id="username" name="username" required/>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-12"> 
               <input type="password" className="form-control" placeholder="Password" id="password" name="password" required/>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-12"> 
               <input type="email" className="form-control" placeholder="Email" id="email" name="email" required/>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-6">
               <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" required/>
            </div>
            <div className="form-group col-md-6">
               <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" required/>
            </div>
         </div>
         <div className="form-row">
            <div className="col-md-6">
               <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
               <label className="form-control-gender" htmlFor="customRadioInline1">&nbsp;Male</label>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
               <label className="form-control-gender" htmlFor="customRadioInline2">&nbsp;Female</label>
            </div>
            <div className="form-group col-md-6">
               <select className="form-control">  
               <option>-Select Country-</option>                               
               {
                  this.props.countries && this.props.countries.map((country) => {
                     return <option key={country.code} value={country.name}>{country.name}</option>
                  })
               }
               </select>
            </div>
         </div>
         
         <div className="form-group">               
            <input type="submit" value="SignUp" onClick={this.handleClickTest} className="btn btn-primary" /> &nbsp;&nbsp; Already registered? <a className="btn-outline-info" href="/login"><b>Login</b></a>
         </div>   
         <div className="form-group">  
            <span id="message" name="message"></span>
         </div>                 
      </div> 
      );
   }
}

function mapStateToProps(state) {
   return {
      countries: state.countryReducer.countries,
      isAuthorized: state.userReducer.isAuthorized
   };
}

function mapDispatchToProps(dispatch) {
   return {
      // getNpcOpenQuotes: (items) => {
      //    return (dispatch) => {
      //       return post(`${API_URL}/Npc/QuoteGrid`, items)
      //          .then((result) => {
      //             dispatch({ type: 'GET_NPC_GRID_ITEMS', payload: result.quotesForNpcApiModels });
      //          })
      //          .catch((err) => {
      //             console.log('GetQuoteNPC RESULT ERROR', err);
      //          })
      //    }
      // },
      getCountries: () => {         
         return get(`${API_URL}/countries`)
            .then((result) => {
               //console.log("Country loaded", result.result);
               dispatch({ type: "LOAD-COUNTRIES", payload: result.result });
            })
            .catch((err) => {
               console.log('./src/pages/signup.js => mapDispatchToProps => getCountries()', err);
            })         
      },
      signUp: () => {                  
         dispatch({ type: "AUTHORIZED", payload: true });
      }
   };
}

export default connect(
   mapStateToProps, mapDispatchToProps
)(SignUp);

export const userReducer = (state = { isAuthorized : false, 
    user : {
       username : '', firstname: '', lastname: '', 
       password:'', email: '', gender: '', country: ''},
    messageLog: {
       error: false,
       message: ''
    } 
    }, action ) => {
    switch(action.type) {
       
       case "AUTHORIZED":
          //console.log(action.payload);
          return {
             ...state, isAuthorized: action.payload
          };
       case "LOGIN-USERNAME": 
          let userWithUsername = Object.assign({}, state.user, {username: action.payload});         
          return {
             ...state, user: userWithUsername
          };
       case "LOGIN-PASSWORD": 
          let userWithPassword = Object.assign({}, state.user, {password: action.payload});         
          return {
             ...state, user: userWithPassword
          };
       case "LOGIN-USER":
          if(action.payload && action.payload.message && action.payload.message === "Login successfull"){
             state.isAuthorized = true;
             return {
                ...state, user: action.payload
             };
          } else {
             return {
                ...state, messageLog: action.payload
             };
          }
          
       default:
          return state;
    }
 }
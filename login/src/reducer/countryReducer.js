
export const countryReducer = (state = {countries: []}, action ) => {
    switch(action.type) {
       case "LOAD-COUNTRIES":
          return {
             ...state, countries: action.payload
          };
       default:
          return state;
    }
 }
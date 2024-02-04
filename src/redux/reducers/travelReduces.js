import {
    TRAVEL_API_STARTED,
    TRAVEL_DATA_SUCCESS,
    TRAVEL_DATA_FAILURE,
  } from "../actions/actionType";

  const initialState = {
       loading : false,
       data : [] ,
       error : ""
  }

  const travelReducer = (state = initialState , action) => {
    switch(action.type){
        case  TRAVEL_API_STARTED : return {...state,loading : true};

        case  TRAVEL_DATA_SUCCESS : return ({...state,data : action.payload , loading : false, error : ""} );

        case  TRAVEL_DATA_FAILURE : return ({...state,data : [] , loading : false, error : action.payload} );

        default : return state;

    }
  }

  export default travelReducer;
  
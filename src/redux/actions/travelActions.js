import {
  TRAVEL_API_STARTED,
  TRAVEL_DATA_SUCCESS,
  TRAVEL_DATA_FAILURE,
} from "./actionType";
import axios from "axios";
// import { UseDispatch, useDispatch } from "react-redux";

// const dispatch = useDispatch();

export const travelApiStarted = () => {
    return {
        type : TRAVEL_API_STARTED
    }
}

export const travelDataSuccess = (data) => {
    return {
        type : TRAVEL_DATA_SUCCESS,
        payload : data
    }
}

export const travelDataFailure = (error) => {
    return {
        type : TRAVEL_DATA_FAILURE,
        payload : error
    }
}

export function travelRequest(){
    return (dispatch)=>{
        dispatch(travelApiStarted());
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => dispatch(travelDataSuccess(response.data)))
    .catch(err => dispatch(travelDataFailure(err.message)))

    }
}
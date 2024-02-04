import {
  TRAVEL_API_STARTED,
  TRAVEL_DATA_SUCCESS,
  TRAVEL_DATA_FAILURE,
} from "./actionType";

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
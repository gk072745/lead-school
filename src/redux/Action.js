import * as types from "./ActionTypes.js";
import axios from "axios";

// ...........pending state

export const getLocationRequest = () => {
  return {
    type: types.GET_LOCATION_REQUEST,
  };
};

// ...........success state

export const getLocationSuccess = (payload) => {
  return {
    type: types.GET_LOCATION_SUCCESS,
    payload,
  };
};

// ...........error state

export const getLocationFailure = (payload) => {
  return {
    type: types.GET_LOCATION_FAILURE,
    payload,
  };
};

export const getLocation = (postalCode) => (dispatch) => {
  dispatch(getLocationRequest());

  axios
    .get(`https://api.zippopotam.us/in/${postalCode}`)
    .then((result) => {
      dispatch(getLocationSuccess(result.data));
    })
    .catch((error) => {
      dispatch(getLocationFailure(error)); // Pass the error object directly
    });
};

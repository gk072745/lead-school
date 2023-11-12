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
// ...........clear state

export const clearLocation = () => {
  return {
    type: types.CLEAR_LOCATION,
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
      dispatch(getLocationFailure(error));
    });
};

export const clearLocationFunc = () => (dispatch) => {
  dispatch(getLocationRequest());

  try {
    dispatch(clearLocation());
  } catch (error) {
    dispatch(getLocationFailure(error));
  }
};

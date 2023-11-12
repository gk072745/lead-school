import * as types from "./ActionTypes";
import { getItem, setItem } from "./configs";

const initialState = getItem() || {
  location: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // ..............Pending state.........
    case types.GET_LOCATION_REQUEST:
      var obj = {
        ...state,
        isLoading: true,
      };
      setItem(obj);

      return obj;

    // ..............Success state.........
    case types.GET_LOCATION_SUCCESS:
      var obj = {
        ...state,
        location: payload,
        isLoading: false,
        isError: false,
      };
      setItem(obj);

      return obj;

    // ..............Error state.........
    case types.GET_LOCATION_FAILURE:
      var obj = {
        ...state,
        isError: payload,
        isLoading: false,
        location: {},
      };
      setItem(obj);
      return obj;

    case types.CLEAR_LOCATION:
      console.log(type, initialState);
      var obj = {
        location: {},
        isLoading: false,
        isError: false,
      };
      setItem(obj);
      return obj;
    // .............derfault case..............
    default:
      return state;
  }
};

import * as types from "./ActionTypes";

const initialState = {
  location: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // ..............Pending state.........
    case types.GET_LOCATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    // ..............Success state.........
    case types.GET_LOCATION_SUCCESS:
      return {
        ...state,
        location: payload,
        isLoading: false,
        isError: false,
      };
    // ..............Error state.........
    case types.GET_LOCATION_FAILURE:
      return {
        ...state,
        isError: payload,
        isLoading: false,
        location: {},
      };
    // .............derfault case..............
    default:
      return state;
  }
};

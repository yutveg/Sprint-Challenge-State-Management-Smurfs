import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  POST_SMURF,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        isFetching: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case GET_SMURFS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case POST_SMURF:
      return {
        ...state,
        isPosting: true
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isPosting: false
      };
    case POST_SMURF_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  POST_SMURF,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  isDeleting: false,
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
    case DELETE_SMURF:
      return {
        ...state,
        isDeleting: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isDeleting: false
      };
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        isDeleting: false
      };
    default:
      return state;
  }
};

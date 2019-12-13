import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";
export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const postSmurf = (name, age, height) => dispatch => {
  dispatch({ type: POST_SMURF });
  axios
    .post("http://localhost:3333/smurfs", {
      name: name,
      age: age,
      height: height
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

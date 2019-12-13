import React, { useEffect } from "react";
import { getSmurfs, postSmurf } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

const SmurfList = props => {
  useEffect(() => props.getSmurfs(), [props.smurfs]);

  return (
    <div>
      <SmurfForm postSmurf={props.postSmurf} />
      {!props.smurfs && <p>there are no smurfs..</p>}
      {props.smurfs && props.smurfs.map(item => <Smurf smurf={item} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    isPosting: state.isPosting
  };
};

export default connect(mapStateToProps, {
  getSmurfs,
  postSmurf
})(SmurfList);

import React, { useEffect } from "react";
import { getSmurfs, postSmurf, deleteSmurf } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

const SmurfList = props => {
  useEffect(() => props.getSmurfs(), [props.smurfs]);

  return (
    <div className="container">
      <SmurfForm postSmurf={props.postSmurf} />
      {!props.smurfs && <p>there are no smurfs..</p>}
      <div className="smurf-list">
        {props.smurfs &&
          props.smurfs.map(item => (
            <Smurf key={item.id} smurf={item} deleteSmurf={props.deleteSmurf} />
          ))}
      </div>
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
  postSmurf,
  deleteSmurf
})(SmurfList);

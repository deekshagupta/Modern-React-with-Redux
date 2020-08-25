import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  return (
    <div>
      Song Detail
      <div>Title: {props.song.title}</div>
      <div>Duration: {props.song.duration}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong || {} };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SongDetail);

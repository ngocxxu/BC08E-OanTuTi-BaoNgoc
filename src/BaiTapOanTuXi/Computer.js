import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
			0% {top: -50px;}
			25% {top: 100px;}
			50% {top: -50px;}
			75% {top: 100px;}
			100% {top: 0px;}
		}`;

    return (
      <div className="playerGame d-flex flex-column justify-content-center align-items-center">
        <style>
          {keyframe}
        </style>
        <div className="theThink position-relative">
          <img style={{left:'30%',animation: `randomItem${Date.now()} 0.3s`,width: 100, height: 100 }}
            className="mt-5 position-absolute"
            src={this.props.computer.hinhAnh}
            alt="player"
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 300, height: 300 }}
          src="./img/gameOanTuXi/covid.png"
          alt="player"
        ></img>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer
  };
};

export default connect(mapStateToProps)(Computer);

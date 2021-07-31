import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Player from "./Player";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import { connect } from "react-redux";
class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player></Player>
          </div>
          <div className="col-4 ">
            <KetQuaTroChoi></KetQuaTroChoi>
            <button
              onClick={() => {
                console.log("hello");
                {
                  this.props.playGame();
                }
              }}
              className="btn btn-success p-3 display-4 mt-4"
            >
              PLAY GAME
            </button>
          </div>
          <div className="col-4">
            <Computer></Computer>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      //khía báo hàm lặp di lặp lại
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM"
        });
        count++;
        if (count > 10) {
          //dừng hàm setInterval lại
          clearInterval(randomComputerItem);
          dispatch({
            type: "END_GAME"
          });
        }
      }, 100);
    }
  };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);

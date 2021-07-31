import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  renderOanTuXi = () => {
    // ở đây nó trả về cái obj nên phải trỏ đến cái mảng rồi mới map đc
    console.log(this.props.mangDatCuoc);
    return this.props.mangDatCuoc.map((item, index) => {
      //xét gtri đặt cược thêm viền cho item dc chọn
      let border = {};
      if (item.datCuoc) {
        border = { border: "3px solid red" };
      }
      return (
        <div className="bimbim col-4" key={index}>
          <button onClick={()=>{
            console.log("hello")
            {this.props.datCuoc(item.ma)}
          }} style={border} className="btnItem">
            <img
              style={{ width: 100, height: 100 }}
              src={item.hinhAnh}
              alt="player"
            ></img>
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="playerGame d-flex flex-column justify-content-center align-items-center">
        <div className="theThink ">
          <img
            className="mt-5"
            style={{ width: 100, height: 100 }}
            src= {this.props.mangDatCuoc.find(item => item.datCuoc).hinhAnh}
            alt="player"
          ></img>
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 300, height: 400 }}
          src="./img/gameOanTuXi/doctor.png"
          alt="player"
        ></img>
        <div className="row">{this.renderOanTuXi()}</div>
      </div>
    );
  }
}
// để khi gọi state ở đây nó đúng tên.
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: 'CHON_KEO_BUA_BAO',
        maCuoc
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);

import React, { Component } from "react";
import {connect} from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-3 bimbim1">{this.props.ketQua}</div>
        <div className="display-4 bimbim2">
          Số bàn ăn hên: 
          <span className="text-danger"> {this.props.soBanThang}</span>
        </div>
        <div className="display-4 bimbim2">
          Tổng số bàn chơi: 
          <span className="text-danger"> {this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const  mapStateToProps = (state) =>{
  return{
    ketQua: state.BaiTapOanTuXiReducer.ketQua,
    soBanThang:state.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
  }
}

export default connect(mapStateToProps)(KetQuaTroChoi);

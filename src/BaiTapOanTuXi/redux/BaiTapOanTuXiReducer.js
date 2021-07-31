const stateDefaults = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/gameOanTuXi/keo.png",
      datCuoc: false
    },
    {
      ma: "bua",
      hinhAnh: "./img/gameOanTuXi/bua.png",
      datCuoc: true
    },
    {
      ma: "bao",
      hinhAnh: "./img/gameOanTuXi/bao.png",
      datCuoc: false
    }
  ],

  ketQua: "OẲN TÙ TÌ TRONG MÙA COVID",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: false }
};

export const BaiTapOanTuXiReducer = (state = stateDefaults, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      //reset mảng cược
      console.log(action);

      let mangCuocUpdate = [...state.mangDatCuoc];
      //tạo mảng cược mới từ mảng cược cũ
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      //tìm ra mangCuoc để change trạng thái đặt cược ứng với mã cược đó
      //setstate của mảng cược
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME":
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa rồi chọn lại đê !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua rồi nhé hé hé !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Ăn hên thoai bạn ôi :))";
          }
          break;
        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "Hòa rồi chọn lại đê !!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "Thua rồi nhé hé hé !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Ăn hên thoai bạn ôi :))";
          }
          break;
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hòa rồi chọn lại đê !!!";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua rồi nhé hé hé !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Ăn hên thoai bạn ôi :))";
          }
          break;

        default:
          state.ketQua = "CHƠI GAME TRONG MÙA COVID";

          return { ...state };
      }
      state.soBanChoi += 1;
    default:
      return { ...state };
  }
};

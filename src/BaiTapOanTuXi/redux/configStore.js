import {combineReducers, createStore} from 'redux';
import {BaiTapOanTuXiReducer} from './BaiTapOanTuXiReducer';
// ở đây nó đang tên là stateGioHang sửa lại tên là BaiTapOanTuXiReducer
const rootReducer = combineReducers({
    BaiTapOanTuXiReducer: BaiTapOanTuXiReducer,
})

export const store = createStore(rootReducer);
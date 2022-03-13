import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    userId: 1,
    nickName: '닉네임',
  },
  totalProfit: 0,
  toalRevenue: 0,
  storeList: [{ id: 1, name: '카페 1번가' }, { id: 2, name: '카페 2번가' }],
};

export const storeSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addLaborCost: (state, action) => {
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = storeSlice.actions;

export default storeSlice.reducer;

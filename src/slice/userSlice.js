import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    userId: 1,
    nickName: '닉네임',
  },
  yearProfit: 0,
  yearRevenue: 0,
  storeList: ['카페 1번가', '카페 2번가'],
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

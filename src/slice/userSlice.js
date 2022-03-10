import { createSlice } from '@reduxjs/toolkit';

export const storeSlice = createSlice({
  name: 'user',
  initialState:
  {
    user: null,
    yearProfit: 0,
    yearRevenue: 0,
  },
  reducers: {
    addLaborCost: (state, action) => {
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = storeSlice.actions;

export default storeSlice.reducer;

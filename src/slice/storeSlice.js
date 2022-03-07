import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const addLabor = createAsyncThunk('POST/addLabor', async (data, { rejectWithValue }) => {
  try {
    const totalCost = data.wage * data.time;
    // axios post를 실행해주는 코드를 넣으면됨
    const result = {
      name: data.name,
      wage: data.wage,
      time: data.time,
      totalCost,
    };
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addMaterialCost = createAsyncThunk('POST/addMaterialCost', async (data, { rejectWithValue }) => {
  try {
    // axios post를 실행해주는 코드를 넣으면됨
    const result = {
      name: data.name,
      unitCost: data.unitCost,
      quantity: data.quantity,
      totalCost: data.totalCost,
    };
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addMaintenance = createAsyncThunk('POST/addMaintenance', async (data, { rejectWithValue }) => {
  try {
    // axios post를 실행해주는 코드를 넣으면됨
    const result = {
      name: data.name,
      cost: data.cost,
    };
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addRevenue = createAsyncThunk('POST/addRevenue', async (data, { rejectWithValue }) => {
  try {
    // axios post를 실행해주는 코드를 넣으면됨
    const result = {
      date: data.date,
      totalCost: data.totalCost,
    };
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  loading: false,
  error: null,
  selectedMonth: 12,
  storeName: '',
  year: 2022,
  yearProfit: 0,
  yearRevenue: 0,
  data: [{
    month: 12,
    Labor: [],
    LaborSum: 0,
    Maintenance: [],
    MaintenanceSum: 0,
    Material: [],
    MaterialSum: 0,
    Revenue: [],
    RevenueSum: 0,
    Profit: 0,
  }],
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(addLabor.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addLabor.fulfilled, (state, action) => {
      state.loading = false;
      const target = state.data.find((v) => v.month === state.selectedMonth);
      target.Labor.push(action.payload);
    });
    builder.addCase(addLabor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(addMaterialCost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addMaterialCost.fulfilled, (state, action) => {
      state.loading = false;
      const target = state.data.find((v) => v.month === state.selectedMonth);
      target.Material.push(action.payload);
    });
    builder.addCase(addMaterialCost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(addRevenue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addRevenue.fulfilled, (state, action) => {
      state.loading = false;
      const target = state.data.find((v) => v.month === state.selectedMonth);
      target.Revenue.push(action.payload);
    });
    builder.addCase(addRevenue.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(addMaintenance.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addMaintenance.fulfilled, (state, action) => {
      state.loading = false;
      const target = state.data.find((v) => v.month === state.selectedMonth);
      target.Maintenance.push(action.payload);
    });
    builder.addCase(addMaintenance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = storeSlice.actions;

export default storeSlice.reducer;

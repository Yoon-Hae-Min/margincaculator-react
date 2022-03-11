import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const loadData = createAsyncThunk('GET/loadData', async (data, { rejectWithValue }) => {
  try {
    // axios data를 load하는 코드를 넣어주면됨
    const result = {
      date: data,
      Labor: [],
      LaborSum: 5,
      Maintenance: [],
      MaintenanceSum: 0,
      Material: [],
      MaterialSum: 0,
      Revenue: [],
      RevenueSum: 0,
    };
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

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
      totalCost: data.cost,
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
  // selectedMonth: 12,
  storeId: null, // payloadcreate의 getstate로 api시에 전송시켜야함
  storeName: 'cafe',
  data: {
    date: '2022-03',
    Labor: [],
    LaborSum: 0,
    Maintenance: [],
    MaintenanceSum: 0,
    Material: [],
    MaterialSum: 0,
    Revenue: [],
    RevenueSum: 0,
    Profit: 0,
  },

};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loadData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(loadData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(addLabor.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addLabor.fulfilled, (state, action) => {
      state.loading = false;
      state.data.Labor.push(action.payload);
      state.data.LaborSum += action.payload.totalCost;
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
      state.data.Material.push(action.payload);
      state.data.MaterialSum = action.payload.totalCost;
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
      state.data.Revenue.push(action.payload);
      state.data.RevenueSum += action.payload.totalCost;
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
      state.data.Maintenance.push(action.payload);
      state.data.MaintenanceSum += action.payload.totalCost;
    });
    builder.addCase(addMaintenance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = storeSlice.actions;

export default storeSlice.reducer;

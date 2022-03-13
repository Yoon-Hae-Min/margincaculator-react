import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const loadStore = createAsyncThunk('GET/loadStore', async (data, { rejectWithValue }) => {
  try {
    // 새로운 storeId를 받는곳
    const dummyResult = await new Promise((resolve) => {
      setTimeout(() => {
        const a = {
          storeId: 2,
          storeName: '카페 1번가',
        };
        resolve(a);
      }, 1000);
    });
    return dummyResult;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const loadDataOfMonth = createAsyncThunk('GET/loadDataOfMonth', async (data, { rejectWithValue, getState }) => {
  try {
    // axios data를 load하는 코드를 넣어주면됨
    // promise로 직접 지연시키는법 밖에는 없는듯
    const dummyResult = await new Promise((resolve) => {
      setTimeout(() => {
        const a = {
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
        resolve(a);
      }, 1000);
    });
    return dummyResult;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addLabor = createAsyncThunk('POST/addLabor', async (data, { rejectWithValue }) => {
  try {
    const totalCost = data.wage * data.time;
    // axios post를 실행해주는 코드를 넣으면됨

    const dummyResult = await new Promise((resolve) => {
      setTimeout(() => {
        const a = {
          name: data.name,
          wage: data.wage,
          time: data.time,
          totalCost,
        };
        resolve(a);
      }, 1000);
    });

    return dummyResult;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addMaterialCost = createAsyncThunk('POST/addMaterialCost', async (data, { rejectWithValue }) => {
  try {
    // axios post를 실행해주는 코드를 넣으면됨
    const dummyResult = await new Promise((resolve) => {
      setTimeout(() => {
        const a = {
          name: data.name,
          unitCost: data.unitCost,
          quantity: data.quantity,
          totalCost: data.totalCost,
        };
        resolve(a);
      }, 1000);
    });
    return dummyResult;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addMaintenance = createAsyncThunk('POST/addMaintenance', async (data, { rejectWithValue }) => {
  try {
    // axios post를 실행해주는 코드를 넣으면됨
    const dummyResult = await new Promise((resolve) => {
      setTimeout(() => {
        const a = {
          name: data.name,
          totalCost: data.cost,
        };
        resolve(a);
      }, 1000);
    });
    return dummyResult;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addRevenue = createAsyncThunk('POST/addRevenue', async (data, { rejectWithValue }) => {
  try {
    // axios post를 실행해주는 코드를 넣으면됨
    const dummyResult = await new Promise((resolve) => {
      setTimeout(() => {
        const a = {
          date: data.date,
          totalCost: data.totalCost,
        };
        resolve(a);
      }, 1000);
    });
    return dummyResult;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  loadDataLoading: false,
  loadDataError: null,

  laborLoading: false,
  laborError: null,

  maintenanceLoading: false,
  maintenanceError: null,

  revenueLoading: false,
  revenueError: null,

  materialLoading: false,
  materialError: null,

  // selectedMonth: 12,
  storeId: null, // payloadcreate의 getstate로 api시에 전송시켜야함
  storeName: '카페 1번가',
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
    builder.addCase(loadDataOfMonth.pending, (state) => {
      state.loadDataLoading = true;
    });
    builder.addCase(loadDataOfMonth.fulfilled, (state, action) => {
      state.loadDataLoading = false;
      state.data = action.payload;
    });
    builder.addCase(loadDataOfMonth.rejected, (state, action) => {
      state.loadDataLoading = false;
      state.loadDataError = action.error;
    });

    builder.addCase(addLabor.pending, (state) => {
      state.laborLoading = true;
    });
    builder.addCase(addLabor.fulfilled, (state, action) => {
      state.laborLoading = false;
      state.data.Labor.push(action.payload);
      state.data.LaborSum += action.payload.totalCost;
    });
    builder.addCase(addLabor.rejected, (state, action) => {
      state.laborLoading = false;
      state.laborError = action.error;
    });

    builder.addCase(addMaterialCost.pending, (state) => {
      state.materialLoading = true;
    });
    builder.addCase(addMaterialCost.fulfilled, (state, action) => {
      state.materialLoading = false;
      state.data.Material.push(action.payload);
      state.data.MaterialSum = action.payload.totalCost;
    });
    builder.addCase(addMaterialCost.rejected, (state, action) => {
      state.materialLoading = false;
      state.materialError = action.error;
    });

    builder.addCase(addRevenue.pending, (state) => {
      state.revenueLoading = true;
    });
    builder.addCase(addRevenue.fulfilled, (state, action) => {
      state.revenueLoading = false;
      state.data.Revenue.push(action.payload);
      state.data.RevenueSum += action.payload.totalCost;
    });
    builder.addCase(addRevenue.rejected, (state, action) => {
      state.revenueLoading = false;
      state.revenueError = action.error;
    });

    builder.addCase(addMaintenance.pending, (state) => {
      state.maintenanceLoading = true;
    });
    builder.addCase(addMaintenance.fulfilled, (state, action) => {
      state.maintenanceLoading = false;
      state.data.Maintenance.push(action.payload);
      state.data.MaintenanceSum += action.payload.totalCost;
    });
    builder.addCase(addMaintenance.rejected, (state, action) => {
      state.maintenanceLoading = false;
      state.maintenanceError = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = storeSlice.actions;

export default storeSlice.reducer;

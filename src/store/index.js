import { configureStore } from '@reduxjs/toolkit';
import storeSlice from '../slice/storeSlice';
import userSlice from '../slice/userSlice';

export default configureStore({
  reducer: {
    store: storeSlice,
    user: userSlice,
  },
});

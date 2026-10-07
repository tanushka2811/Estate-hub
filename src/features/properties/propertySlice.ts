import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { MOCK_PROPERTIES, type Property } from '../../data/mockProperties.ts';

interface PropertyState {
  items: Property[];
  loading: boolean;
  error: string | null;
}

const initialState: PropertyState = {
  items: MOCK_PROPERTIES,
  loading: false,
  error: null,
};

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setProperties } = propertySlice.actions;
export default propertySlice.reducer;

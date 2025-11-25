import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { FilterList } from '../model/const';
import type { CurrentFilter, FilterItem } from '../model/types';

export interface FilterState {
  currentFilter: CurrentFilter[];
  filterList: FilterItem[];
}

const initialState: FilterState = {
  currentFilter: [],
  filterList: FilterList,
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentFilter: (state, action: PayloadAction<CurrentFilter>) => {
      const index = state.currentFilter.findIndex(
        (f) => f.key === action.payload.key
      );
      if (index >= 0) {
        state.currentFilter[index] = action.payload;
      } else {
        state.currentFilter.push(action.payload);
      }
    },
  },
});

export const { setCurrentFilter } = FilterSlice.actions;
export default FilterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
import { FilterList } from '../model/const'
import type { CurrentFilter, FilterItem } from '../model/types'

export interface FilterState {
  currentFilter: CurrentFilter[],
  filterList: FilterItem[]
}

const initialState: FilterState = {
  currentFilter: [],
  filterList: FilterList
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
  },
})

export default FilterSlice.reducer
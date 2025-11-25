import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface OffersCheckboxState {
  checkedItems: Record<string, boolean>;
}

const initialState: OffersCheckboxState = {
  checkedItems: {},
};

export const offersCheckboxSlice = createSlice({
  name: 'offersCheckbox',
  initialState,
  reducers: {
    setCheckedItem(
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) {
      state.checkedItems[action.payload.id] = action.payload.value;
    },
    toggleAll(state, action: PayloadAction<{ ids: string[]; value: boolean }>) {
      action.payload.ids.forEach((id) => {
        state.checkedItems[id] = action.payload.value;
      });
    },
  },
});

export const { setCheckedItem, toggleAll } = offersCheckboxSlice.actions;
export default offersCheckboxSlice.reducer;

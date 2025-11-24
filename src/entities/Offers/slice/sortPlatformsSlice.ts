import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PlatformData } from "../model/types";
import type { SortOrder } from "@/shared/types";
import { TablePlatformsData } from "../model/const";


interface PlatformsState {
  platforms: PlatformData[];
  sortKey: string | null;
  sortOrder: SortOrder;
}

const initialState: PlatformsState = {
  platforms: TablePlatformsData,
  sortKey: null,
  sortOrder: "asc",
};

const platformsSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    setPlatforms(state, action: PayloadAction<PlatformData[]>) {
      state.platforms = action.payload;
    },

    sortPlatforms(state, action: PayloadAction<string>) {
      const key = action.payload;

      if (state.sortKey === key) {
        state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
      } else {
        state.sortKey = key;
        state.sortOrder = "asc";
      }

      state.platforms.sort((a, b) => {
        const aValue = a[key as keyof PlatformData];
        const bValue = b[key as keyof PlatformData];

        if (typeof aValue === "number" && typeof bValue === "number") {
          return state.sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        }

        if (typeof aValue === "string" && typeof bValue === "string") {
          return state.sortOrder === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        return 0;
      });
    },
  },
});

export const { setPlatforms, sortPlatforms } = platformsSlice.actions;
export default platformsSlice.reducer;
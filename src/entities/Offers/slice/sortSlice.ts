import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { OfferData } from "../model/types";

export type SortOrder = "asc" | "desc";

interface OffersState {
  offers: OfferData[];
  sortKey: string | null;
  sortOrder: SortOrder;
}

const initialState: OffersState = {
  offers: [],
  sortKey: null,
  sortOrder: "asc",
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<OfferData[]>) {
      state.offers = action.payload;
    },

    sortOffers(state, action: PayloadAction<string>) {
      const key = action.payload;


      if (state.sortKey === key) {
        state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
      } else {
        state.sortKey = key;
        state.sortOrder = "asc";
      }

      state.offers.sort((a, b) => {
        const aValue = a[key as keyof OfferData];
        const bValue = b[key as keyof OfferData];

        if (key === "launchDate") {
          const aDate = new Date(aValue as string).getTime();
          const bDate = new Date(bValue as string).getTime();
          return state.sortOrder === "asc" ? aDate - bDate : bDate - aDate;
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return state.sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        }

        if (typeof aValue === "string" && typeof bValue === "string") {
          return state.sortOrder === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (key === "platforms") {
          const aId = (aValue as { id: string }[])[0].id;
          const bId = (bValue as { id: string }[])[0].id;

          return state.sortOrder === "asc"
            ? aId.localeCompare(bId)
            : bId.localeCompare(aId);
        }

        return 0;
      });
    }
  }
});

export const { setOffers, sortOffers } = offersSlice.actions;
export default offersSlice.reducer;
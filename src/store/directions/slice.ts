import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Statuses } from "src/enums";
import type { Direction, Filter } from "src/types";
import { getDirections, getFilter } from "./actions";

interface State {
  currentDirection: Direction | null;
  currentFilter: Direction | null;
  directions: {
    data: Direction[];
    status: Statuses;
  };
  filter: {
    data: Filter[];
    status: Statuses;
  };
}

const initialState: State = {
  currentDirection: null,
  currentFilter: null,

  directions: {
    data: [],
    status: Statuses.INIT,
  },
  filter: {
    data: [],
    status: Statuses.INIT,
  },
};

const directionSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDirection(state, { payload }: PayloadAction<Direction | null>) {
      state.currentDirection = payload;
    },
    setFilter(state, { payload }: PayloadAction<Direction | null>) {
      state.currentFilter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDirections.pending, (state) => {
      state.directions.status = Statuses.LOADING;
    });
    builder.addCase(
      getDirections.fulfilled,
      (state, { payload }: PayloadAction<Direction[]>) => {
        state.directions.data = payload;
        state.directions.status = Statuses.SUCCESS;
      }
    );
    builder.addCase(getDirections.rejected, (state) => {
      state.directions.status = Statuses.ERROR;
    });

    builder.addCase(getFilter.pending, (state) => {
      state.filter.status = Statuses.LOADING;
    });
    builder.addCase(
      getFilter.fulfilled,
      (state, { payload }: PayloadAction<Filter[]>) => {
        state.filter.data = payload;
        state.filter.status = Statuses.SUCCESS;
      }
    );
    builder.addCase(getFilter.rejected, (state) => {
      state.filter.status = Statuses.ERROR;
    });
  },
});

export const { setDirection, setFilter } = directionSlice.actions;

export default directionSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Statuses } from "src/enums";
import { Direction } from "src/types";

interface State {
  directions: {
    data: Direction[];
    status: Statuses;
  };
}

const initialState: State = {
  directions: {
    data: [],
    status: Statuses.INIT,
  },
};

const directionSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = directionSlice.actions;

export default directionSlice.reducer;

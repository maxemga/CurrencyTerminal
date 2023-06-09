import { createAsyncThunk } from "@reduxjs/toolkit";
import { DirectionsService } from "src/api";

export const getDirections = createAsyncThunk("getDirections", async () => {
  const { data } = await DirectionsService.getAll();

  return data;
});

export const getFilter = createAsyncThunk("getFilter", async () => {
  const { data } = await DirectionsService.getFilter();

  return data;
});

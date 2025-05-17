import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Interface describing the structure of a single clinner
interface Clinner {
  id: number;
  name: string;
  img: string;
  typeCleaning: string[];
  rate: string;
  dateAviable: string[];
  description: string;
  price: string;
}

// Async thunk to fetch clinners by cleaning type
export const fetchClinnersByType = createAsyncThunk(
  "clinners/fetchByType",
  async (type: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://backend-ob1m.onrender.com/clinners/by-type`,
        {
          params: { type },
        }
      );
      console.log(response.data);
      return response.data as Clinner[];
    } catch (error) {
      console.error("Error fetching clinners: ", error);
      return rejectWithValue(error.response || error.message);
    }
  }
);

// Initial state of the slice
const initialState = {
  data: [] as Clinner[],
  status: "idle" as "idle" | "loading" | "succeeded" | "failed",
};

// Create the slice using createSlice
const clinnersSlice = createSlice({
  name: "clinners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClinnersByType.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClinnersByType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchClinnersByType.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default clinnersSlice.reducer;

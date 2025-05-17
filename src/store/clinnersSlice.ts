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
export const fetchClinnersByType = createAsyncThunk<
  Clinner[], // Что возвращает fulfilled
  string, // Что принимает (тип string — это аргумент type)
  { rejectValue: string }
>("clinners/fetchByType",
   async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://backend-ob1m.onrender.com/clinners/by-type`,
        { params: { type } }
      );
      return response.data as Clinner[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error fetching clinners: ", error);
      const message =
        error.response?.data?.error || error.message || "Unknown error";
      return rejectWithValue(message);
  }
});

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

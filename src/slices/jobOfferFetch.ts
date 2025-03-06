import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface JobOfferTechnical {
  id?: string;
  content?: string;
  url?: string;
  connection?: 'open' | 'close';
  offers?: {
    content: string;
    url: string;
    title: string;
    apply: string;
  };
}

export interface FetchJobOffers {
  data: JobOfferTechnical;
  endpoint: string;
}
const initialState: { jobOffers: JobOfferTechnical[], loading: boolean} = {
  jobOffers: [],
  loading: false
}

export const fetchJobOffers = createAsyncThunk('soundFetch/fetchSounds', async (req: FetchJobOffers) => {
  try {
  const { endpoint, data } = req;
  const response = await fetch(`http://localhost:5000/scrape-jobs?country=${endpoint}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return response;
} catch (e) {
  console.log(e)
}
})

export const jobOfferFetchSlice = createSlice({
  name: 'jobOfferFetch',
  initialState,
  reducers: {
    addJobOffer: (state, action: PayloadAction<JobOfferTechnical>) => {
      const { connection } = action.payload;
      const index = state.jobOffers.findIndex(job => job.connection === "open");
      if (index === -1 && connection !== "close") {
        state.jobOffers.push(action.payload);
      } else if (connection !== "close") {
        state.jobOffers[index] = {
          ...state.jobOffers[index],
          ...action.payload
        }
      } else if (connection === "close") {
        state.jobOffers[index] = {
          ...state.jobOffers[index],
          connection: "close"
        }
      }
    },
    closeOffers: (state) => {
      state.jobOffers = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobOffers.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchJobOffers.fulfilled, (state, action) => {
      state.jobOffers = []
      state.loading = false
    })
    builder.addCase(fetchJobOffers.rejected, (state, action) => {
      console.log(action)
      state.jobOffers = []
      state.loading = false
    })
  },
})

export const selectJobOffers = (state: { jobOffers: { jobOffers: JobOfferTechnical[] }}) => state.jobOffers.jobOffers;

// Action creators are generated for each case reducer function
export const { addJobOffer, closeOffers } = jobOfferFetchSlice.actions

export default jobOfferFetchSlice.reducer
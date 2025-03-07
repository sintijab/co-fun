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
  }
})

export const selectJobOffers = (state: { jobOffers: { jobOffers: JobOfferTechnical[] }}) => state.jobOffers.jobOffers;

// Action creators are generated for each case reducer function
export const { addJobOffer, closeOffers } = jobOfferFetchSlice.actions

export default jobOfferFetchSlice.reducer
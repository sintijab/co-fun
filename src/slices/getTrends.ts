import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { technical } from '../components/mocks/technical_january';

export interface SoundTechnical {
  id?: string;
  title?: string;
  author?: string;
  user_email?: string;
  source?: string;
  rhytmic_scale?: string;
  tempo_modulation?: string;
  beat_types?: string;
  tempo_range?: string;
  tempo_complexity?: string;
  spatial_context?: string;
  enclosed_settings?: string;
  open_air?: string;
  natural_environments?: string;
  date?: string;
  connection?: 'open' | 'close'
}

const initialState: { sounds: SoundTechnical[], loading: boolean } = {
  sounds: [],
  loading: false,
}

export const getTrends = createAsyncThunk<SoundTechnical[], 'technical' | 'open'>('trends/getTrends', async (endpoint: string) => {
  try {
  // const response = await fetch(`https://sound-master.onrender.com/api/sounds/${endpoint}`, {
  //   method: 'GET',
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // if (!response.ok) {
  //   throw Error('Sound unavailable')
  // }
  const results = await new Promise((resolve, _) => {
    resolve(technical)
  })
  // @ts-ignore-next-line
  // const results = await response.json();
  // console.log(response);
  // @ts-ignore
  const sorted = results.sort((a, b) => new Date(b.date) - new Date(a.date))
  return sorted;
} catch (e) {
  console.log(e)
}
})

export const trendsSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getTrends.pending, (state, _) => {
      state.loading = true;
    })
    builder.addCase(getTrends.fulfilled, (state, { payload }) => {
      state.sounds = [...payload];
      state.loading = false;
    })
    builder.addCase(getTrends.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
    })
  },
})

export const selectTrends = (state: { trends: { sounds: SoundTechnical[] }}) => state.trends.sounds

export default trendsSlice.reducer
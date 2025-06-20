import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

export const triggerScrape = createAsyncThunk(
  'progress/triggerScrape',
  async ({ baseUrl, link }: { baseUrl: string; link: string }, thunkAPI) => {
    try {
      const url = `http://localhost:5001/scrape?base_url=${encodeURIComponent(baseUrl)}&link=${encodeURIComponent(link)}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const baseUrl = 'http://localhost:5001/progress';

interface ProgressState {
  baseUrl: string;
  link: string;
  discovered: number;
  total: number;
  processed: number;
  loading: boolean;
  error: string | null;
}

const initialState: ProgressState = {
  baseUrl: '',
  link: '',
  discovered: 0,
  total: 0,
  processed: 0,
  loading: false,
  error: null,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setScrapeParams: (
      state,
      action: PayloadAction<{ baseUrl?: string; link?: string }>
    ) => {
      if (action.payload.baseUrl) {
        state.baseUrl = action.payload.baseUrl;
      }
      if (action.payload.link) {
        state.link = action.payload.link;
      }
    },
    setProcessed: (state, action: PayloadAction<number>) => {
      state.processed = action.payload;
    },
    setDiscovered: (state, action: PayloadAction<number>) => {
      state.discovered = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(triggerScrape.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(triggerScrape.fulfilled, state => {
        state.loading = false;
      })

      .addCase(triggerScrape.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setScrapeParams, setProcessed, setDiscovered, setTotal } = progressSlice.actions;

export const listenToProgress = () => (dispatch: AppDispatch) => {
  const eventSource = new EventSource(`${baseUrl}/stream`);

  eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      const { event: type, value } = data;

      if (type === "processed") {
        dispatch(setProcessed(value));
      } else if (type === "discovered") {
        dispatch(setDiscovered(value));
      } else if (type === "total") {
        dispatch(setTotal(value));
      }
    } catch (error) {
      console.error("Error parsing SSE data", error);
    }
  };

  eventSource.onerror = (err) => {
    console.error("SSE error:", err);
    eventSource.close();
  };
};



export default progressSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEventSource } from '@microsoft/fetch-event-source';

type SSEListenerArgs = {
  url: string;
  actionType: string; // Redux action type string to dispatch
};

export const createSSEListener = ({ url, actionType }: SSEListenerArgs) => {
  return createAsyncThunk(
    `progress/listenTo${actionType}`,
    async (_, { dispatch, signal }) => {
      await fetchEventSource(url, {
        method: 'GET',
        headers: { Accept: 'text/event-stream' },
        signal,
        onmessage(event) {
          console.log('stream')
          console.log(event)
          const count = Number(event.data);
          if (!isNaN(count)) {
            dispatch({ type: actionType, payload: count });
          }
        },
        onerror(err) {
          console.error('SSE error:', err);
          throw err;
        },
        onclose() {
          console.log('SSE connection closed');
        },
      });
    }
  );
};

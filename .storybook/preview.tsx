import React from 'react';
import { CoFunUiProvider } from '../src/libs/co-fun-ui/src/lib/co-fun-ui';

const shouldRenderFullLayout = (keys, filename) => keys.some((key) => filename.includes(key));
 
const preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      const { fileName } = parameters;
      return <div style={{ padding: `${!shouldRenderFullLayout(['Navigation', 'Hero', 'Layout', 'Overview', 'Assistant'], fileName) ? '1rem' : '0'}`}}><CoFunUiProvider><Story /></CoFunUiProvider></div>
    }
  ],
};
 
export default preview;
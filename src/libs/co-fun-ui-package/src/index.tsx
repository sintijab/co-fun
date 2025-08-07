import React from 'react';
import CoFunUiProvider from './co-fun-ui.js';
import { GlobalStyles } from './GlobalStyles.js';
import { AIAssistantChat as AIAssistantChatRaw } from './AIAssistantChat.js';
import { Messages as MessagesRaw } from './components/Chat/Messages.js';
import { Input as InputRaw } from './components/Chat/Input.js';
import { NavigationChat as NavigationChatRaw } from './components/Navigation/NavigationChat.js';

export const AIAssistantChat = (props: any) => (
  <CoFunUiProvider>
    <GlobalStyles />
    <AIAssistantChatRaw {...props} />
  </CoFunUiProvider>
);

export const Messages = (props: any) => (
  <CoFunUiProvider>
    <GlobalStyles />
    <MessagesRaw {...props} />
  </CoFunUiProvider>
);

export const Input = (props: any) => (
  <CoFunUiProvider>
    <GlobalStyles />
    <InputRaw {...props} />
  </CoFunUiProvider>
);

export const NavigationChat = (props: any) => (
  <CoFunUiProvider>
    <GlobalStyles />
    <NavigationChatRaw {...props} />
  </CoFunUiProvider>
);

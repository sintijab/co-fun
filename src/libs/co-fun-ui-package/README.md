
# @co-fun/ui

@co-fun/ui is an open-source design system for building AI chatbots and digital products. It offers a unified design language, reusable code, and clear guidelines for human-AI interaction.

👉 [Live Demo & Documentation](https://www.cofun.digital/open-source)

## Included Components


## Layout
The `AIAssistantChat` component now features a two-column layout:
- The chat and input area are displayed on the left (40% width).
- Custom children content is rendered on the right (60% width).
- The chat side is scrollable with a hidden scrollbar for a cleaner UI.
## Installation


```bash
npm install @co-fun/ui
```

## Usage
### Example basic usage

```tsx
import React, { useState, useRef } from 'react';
import { AIAssistantChat } from '@co-fun/ui';

const BasicChat = () => {
  const [history, setHistory] = useState([
    { response: 'Welcome! How can I help you?', role: 'system' }
  ]);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const handleSubmit = (question) => {
    setLoading(true);
    setHistory(prev => [...prev, { response: question, role: 'user' }]);
    // Simulate assistant response
    setTimeout(() => {
      setHistory(prev => [...prev, { response: 'This is an answer.', role: 'assistant' }]);
      setLoading(false);
    }, 1000);
  };
  return (
    <AIAssistantChat
      ref={ref}
      onSubmit={handleSubmit}
      history={history}
      title="Assistant"
      disabled={loading}
      theme="ocean"
      image={null}
    />
  );
};
```

### Example usage with children (right side panel)
```tsx
const ChatWithPanel = () => {
  const [history, setHistory] = useState([
    { response: 'Welcome! Select an option.', role: 'system' }
  ]);
  const handleSubmit = (question) => {
    setHistory(prev => [...prev, { response: question, role: 'user' }]);
    setTimeout(() => {
      setHistory(prev => [...prev, { response: 'Here is more info.', role: 'assistant' }]);
    }, 1000);
  };
  return (
    <AIAssistantChat
      ref={ref}
      onSubmit={handleSubmit}
      history={history}
      title="Assistant"
      disabled={false}
      theme="ocean"
      image={null}
    >
      {/* Custom content on the right side */}
      <div style={{ padding: 24 }}>
        <h2>Panel Title</h2>
        <p>Extra information or controls go here.</p>
      </div>
    </AIAssistantChat>
  );
};
```

## Component Props

### `AIAssistantChat`
```ts
interface IAssistantProps {
  author?: string;
  theme: string;
  image?: string | React.ReactNode;
  history?: IMessage[];
  title: string;
  suggestions?: { answer: string }[] | null;
  onSubmit: (data: string) => void;
  onClickSuggestion?: (i: number) => void;
  disabled: boolean;
  links?: string[];
  children?: React.ReactNode;
}
```

### `Messages`
```ts
interface IMessage {
  response: string | React.ReactNode;
  widget?: any;
  author?: string;
}
interface IMessages {
  author?: string;
  theme: string;
  image?: string | React.ReactNode;
  history?: IMessage[];
  title: string;
  children?: React.ReactNode;
}
```

### `Input`
```ts
interface InputProps {
  disabled: boolean;
  theme: string;
  suggestions?: { answer: string }[] | null;
  onSubmit: (data: string) => void;
  onClickSuggestion?: (i: number) => void;
}
```

### `NavigationChat`
```ts
interface NavigationChatProps {
  author?: string;
  image?: string | React.ReactNode;
  title?: string;
  showBackIcon?: boolean;
}
```

## License
MIT

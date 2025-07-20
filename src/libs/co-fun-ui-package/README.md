
# @co-fun/ui

@co-fun/ui is an open-source design system for building AI chatbots and digital products. It offers a unified design language, reusable code, and clear guidelines for human-AI interaction.

👉 [Live Demo & Documentation](https://www.cofun.digital/open-source)

## Included Components

- **AIAssistantChat**: Main template for AI chat interfaces.
- **Messages**: Renders chat history and messages.
- **Input**: Chat input field with suggestions.
- **NavigationChat**: Top navigation for chat context.

## Installation

```bash
npm install @co-fun/ui
```

## Usage

```tsx
import { AIAssistantChat, Messages, Input, NavigationChat } from '@co-fun/ui';
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

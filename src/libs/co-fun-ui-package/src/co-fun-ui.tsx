import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';
import { textTheme } from './foundations/Typography/TextBase/theme.js';
import colorTheme from './foundations/Colors/theme.js';
import { Input, InputLoader } from './components/Chat/index.js';
import { ChatSingleIcon } from './foundations/Icons/ChatSingleIcon.js';
import { TextBase } from './foundations/Typography/index.js';

const theme = extendTheme({
  components: { TextBase: textTheme },
  colors: colorTheme.colors,
  textStyles: {
    'chat': {
      fontFamily: '"Roboto", sans-serif;',
      fontSize: '12pt',
      lineHeight: '150%',
    },
    'chat-time': {
      fontFamily: '"Roboto", sans-serif;',
      letterSpacing: "0.05em",
      fontSize: "9pt",
      fontWeight: "500",
    }
  }
});

export function CoFunUiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraBaseProvider theme={theme}>
      {children}
    </ChakraBaseProvider>
  );
}

export { TextBase, Input, InputLoader, ChatSingleIcon };

export default CoFunUiProvider;


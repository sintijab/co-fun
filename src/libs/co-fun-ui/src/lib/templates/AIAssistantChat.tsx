import {
  Box,
  Flex,
  FlexProps,
} from "@chakra-ui/react";
import {
  Input,
  Messages,
  NavigationChat,
} from "../components";
import { IConversationsList } from "../components/Chat/ConversationsList";
import { IMessages } from "../components/Chat/Messages";
import { INavigationBase } from "../components/Navigation/NavigationSide";
import { FormEvent, forwardRef } from "react";

type IAssistantProps = IConversationsList &
  IMessages & {
    disabled: boolean;
    links?: INavigationBase[];
    suggestions?: { answer: string }[] | null;
    onSubmit: (data: string) => void;
    onClickSuggestion?: (i: number) => void;
  } & FlexProps;

export const AIAssistantChat = forwardRef<HTMLDivElement, IAssistantProps>(
  (
    {
      author,
      theme,
      image,
      history,
      title,
      suggestions = [],
      onSubmit,
      onClickSuggestion,
      disabled,
      children,
      ...flexProps
    },
    ref
  ) => {
    return (
      <>
        <Box width="100%" bg="primary.white" position="fixed" zIndex="10">
          <NavigationChat author={author} image={image!} title={title} />
        </Box>

        <Flex pt="3rem" h="100%" {...flexProps}>
          <Flex
            ref={ref}
            position="fixed"
            overflowY="auto"
            overflowX="hidden"
            top="0"
            bottom={suggestions?.length ? "5.5rem" : "3.5rem"}
            right="0"
            left="0"
            w={["100%", "50%"]}
            m="auto"
            mb="3.5rem"
            mt="6.5rem"
          >
            <Messages author={author} theme={theme} image={image} history={history} title={title}>
              {children}
              <Input
                theme={theme}
                disabled={disabled}
                onClickSuggestion={onClickSuggestion}
                suggestions={suggestions}
                position="fixed"
                left="0"
                right="0"
                w={["100%", "50%"]}
                m="auto"
                bottom=".1rem"
                onSubmit={(data) => onSubmit(data as FormEvent<HTMLDivElement>)}
              />
            </Messages>
          </Flex>
        </Flex>
      </>
    );
  }
);

AIAssistantChat.displayName = "AIAssistantChat";

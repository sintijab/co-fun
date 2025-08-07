import {
  Box,
  Flex,
  FlexProps,
} from "@chakra-ui/react";
import { IConversationsList } from "./components/Chat/ConversationsList";
import { IMessages, Messages } from "./components/Chat/Messages";
import { FormEvent, forwardRef } from "react";
import { NavigationChat } from "./components/Navigation/NavigationChat";
import { Input } from "./components/Chat";
import { Logo, TextBase } from "./foundations";

type IAssistantProps = IConversationsList &
  IMessages & {
    disabled: boolean;
    suggestions?: { answer: string }[] | null;
    onSubmit: (data: string) => void;
    inline?: boolean;
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
      width,
      inline = false,
      ...flexProps
    },
    ref
  ) => {
    return (
      <>
        <Box width="100%" bg="primary.white" position={inline ? "relative" : "fixed"} zIndex="10">
          <NavigationChat author={author} image={image!} title={title} />
        </Box>

        <Flex pt="3rem" h="100%" {...flexProps}>
          {/* Left side: Chat */}
          <Flex
            ref={ref}
            direction="column"
            overflowY="auto"
            overflowX="hidden"
            w={width || ["100%", "50%"]}
            m="auto"
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            {...(inline
              ? { position: "relative" }
              : {
                  position: "fixed",
                  top: "0",
                  bottom: suggestions?.length ? "5.5rem" : "3.5rem",
                  left: "0",
                  mb: "3.5rem",
                  mt: "6.5rem"
                }
            )}
          >
            <Messages author={author} theme={theme} image={image} history={history} title={title}>
              <Input
                theme={theme}
                disabled={disabled}
                onClickSuggestion={onClickSuggestion}
                suggestions={suggestions}
                {...(inline ? { position: "relative", left: undefined, right: undefined, bottom: undefined } : { position: "fixed", left: "0", right: undefined, bottom: ".1rem" })}
                w={width || ["100%", "50%"]}
                m="auto"
                onSubmit={(data) => onSubmit(data as FormEvent<HTMLDivElement>)}
                bottomAddon={<TextBase fontSize="8pt">designed with<a href="https://cofun.digital"><Logo fill="#4d4d4dff" height={["8px", "8px"]} width={["3.8rem", "3.8rem"]} marginBottom="2px" /></a></TextBase>}
              />
            </Messages>
          </Flex>
          <Flex
            direction="column"
            overflowY="auto"
            overflowX="hidden"
            w={width || ["100%", "60%"]}
            m="auto"
            {...(inline
              ? { position: "relative" }
              : {
                  position: "fixed",
                  top: "0",
                  bottom: suggestions?.length ? "5.5rem" : "3.5rem",
                  right: "0",
                  mb: "3.5rem",
                  mt: "6.5rem"
                }
            )}
          >
            {children}
          </Flex>
        </Flex>
      </>
    );
  }
);

AIAssistantChat.displayName = "AIAssistantChat";

import { Box, Fade, Flex, FlexProps } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { AvatarIcon, TextBase } from "../../foundations";
import { ReactNode, useEffect, useRef } from "react";

type IMessage = { response: string | ReactNode; widget?: any; author?: string; }
export type IMessages = { author?: string; theme: string; image?: string | React.ReactNode; history?: IMessage[]; title: string; children?: any; } & FlexProps;

export const Messages = ({ author, theme = 'lilac', image, history, children, ...props }: IMessages) => {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTo(0, 0);;
    }
  });
  const lastElement = history ? history?.length - 1 : 0;

  return (
  <Flex direction="column" flex="1" mb="3.5rem" width="100%" {...props}>
    <Box flex="1 1 auto;"  />
    {!!history && history?.map((msg, i) => {
      const isResponder = author === msg.author || msg.author === undefined;
      const isComponent = typeof msg?.response !== 'string';
      return (
      <Flex key={`msg-${i}`} ref={i === lastElement ? messageRef : null} p="0.5rem" alignSelf={!isResponder ? 'flex-end' : 'flex-start'} maxWidth="70%">
      <Fade in={!!history}>
        <Box>
          <Flex>
          {isComponent && msg?.response}
          {image && typeof image === 'string' && !isComponent && isResponder ? <Image alignSelf="flex-start" mt=".5rem" lineHeight="2rem" src={image} h="2rem" w="2rem" borderRadius="50%" mr="1rem" /> : image && !isComponent && typeof image === 'object' && isResponder ? <Box mt=".5rem">{image}</Box> : isResponder && author ? <AvatarIcon mt=".5rem" alignSelf="flex-start" mr="1rem" w="2rem" h="2rem">{author.substring(0, 1)}</AvatarIcon> : null}
          {(!!msg?.response && !isComponent || !!msg?.widget) && <Box bg={isResponder ? `chat.messageBg.${theme}` : `chat.authorBg.${theme}`} p="0.75rem 1rem" borderRadius={isResponder ? "1.25rem 1.25rem 1.25rem .5rem" : "1.25rem 1.25rem .5rem 1.25rem" }><TextBase textStyle="chat" pr="1rem" color={isResponder ? "primary.default": "primary.white"}>{msg?.response || msg?.widget}</TextBase></Box>}
          </Flex>
          {!!msg?.widget && !!msg.response && !isComponent && <Box m="0.5rem 0" pl="3rem"><TextBase textStyle="chat" pr="1rem" color={isResponder ? "primary.defualt": "primary.white"}>{msg?.widget}</TextBase></Box>}
        </Box>
        </Fade>
      </Flex>
    )})}
    {children}
  </Flex>
)}
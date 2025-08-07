import { AIAssistantChat, CustomNodeFlow, Loader } from "@co-fun/ui";
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import { Image as Avatar } from '@chakra-ui/react';
import '@xyflow/react/dist/style.css';
import { ReactFlowProvider } from "@xyflow/react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Response { response: string | ReactNode, author?: string; ref?: MutableRefObject<HTMLDivElement | null> };


export default function Chat() {
  const [messages, setMessages] = useState<Response[]>([])
  const [suggestions, setSuggestions] = useState<{ answer: string, key: string }[] | null>(null)
  const [chatCompleted, setChatCompleted] = useState<boolean>(false)
  const refElement =  useRef<HTMLDivElement | null>(null);
  const { discovered } = useSelector((state: RootState) => state.progress);

  useEffect(() => {
    setMessages([{ response: "Hi, I'm a CO-FUN chat generator. Would you like to build an AI assistant?"}])
    setSuggestions([{ answer: "Let's build a chatbot", key: "Yes"}, { answer: "Demo", key: "Demo"}])
  }, [])

  const onSubmit = (data: string) => {
    let updated = [
      ...messages,
      { response: data, author: 'Sintija' }
    ];
    setMessages(updated);
  };

  const onClickSuggestion = (i: number) => {
    const options = {
      build: "https://cofun.digital/products",
      demo: "https://cofun.digital/products",
    }
    type OptionKey = keyof typeof options;
    const suggestion = suggestions![i].key;
    let updated = [
      ...messages,
      { response: suggestion, author: 'Sintija' },
      { response: "Please select components for the agentic flow."},
      { response: <ReactFlowProvider><CustomNodeFlow data={[{ id: '2-3', status: discovered}]}/></ReactFlowProvider>}
    ];
    if (suggestion === 'Yes') {
      setSuggestions(null)
    }
    if (suggestion === 'demo') {
      window.open(options[suggestion as OptionKey])
    } else {
      if (refElement.current) {
        refElement.current.scrollIntoView();
      }
      setMessages(updated as Response[]);
    }
  }

  const conversation = {
    title: 'AI Chat Generator',
    category: 'Discovery & Analytics',
    time: '1 min',
    image: <Avatar src="./assistant_logo.png" h="2.5rem" w="2.5rem" p=".3rem" maxWidth="2.5rem" borderRadius="50%" border="1px" mr=".75rem" />,
    isActive: true
  };
  
  if (!messages.length) { 
    return <Loader />
  }
  return (<>
    <AIAssistantChat theme="ocean" ref={refElement} onClickSuggestion={onClickSuggestion} suggestions={suggestions} history={messages} onSubmit={(data) => onSubmit(data as string)} image={<Avatar src="./chat_builder.jpg" h="2.5rem" w="2.5rem" maxWidth="2.5rem" p=".1rem" borderRadius="50%" m="0 .5rem 0 0" />} conversations={[conversation]} title={"AI Assistant for Chat Builder"} disabled={Array.isArray(suggestions) && !!suggestions.length || chatCompleted}>{'Embedded content windows'}</AIAssistantChat>
  </>)
}

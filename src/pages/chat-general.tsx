import { AIAssistantChat, Box, ButtonList, LipsIcon, Loader } from "@co-fun/ui";
import { useEffect, useState } from "react";
import { Image as Avatar } from '@chakra-ui/react';

export default function Chat() {
  const [messages, setMessages] = useState<{ response: string, author?: string }[]>([])
  const [suggestions, setSuggestions] = useState<{ answer: string, key: string }[]>([])
  const [chatCompleted, setChatCompleted] = useState<boolean>(false)

  console.log(suggestions.length)
  useEffect(() => {
    setMessages([{ response: "Hi, I'm CO-FUN assistant. Would you like to see our products, schedule a call or send a message?"}])
    setSuggestions([{ answer: "Offers", key: "offers"}, { answer: "Call", key: "call"}, { answer: "Message", key: "message"}])
  }, [])

  const onSubmit = (data: string) => {
    debugger;
    let updated = [
      ...messages,
      { response: data, author: 'Sintija' }
    ];
    setMessages(updated);
  };

  const onClickSuggestion = (i: number) => {
    const options = {
      offers: "https://cofun.digital/products",
      call: "https://calendly.com/sintija-birgele",
      message: "https://cofun.digital/contact"
    }
    type OptionKey = keyof typeof options;
    const suggestion = suggestions[i].key;
    let updated = [
      ...messages,
      { response: suggestion, author: 'Sintija' },
      { response: "Thank you for choosing us!", }
    ];
    setMessages(updated);
    setSuggestions([])
    setChatCompleted(true)
    window.open(options[suggestion as OptionKey])
  }

  const conversation = {
    title: 'AI Assistant in Q&A',
    category: 'Discovery & Analytics',
    time: '1 min',
    image: <Avatar src="./assistant_logo.png" h="2.5rem" w="2.5rem" p=".3rem" borderRadius="50%" border="1px" mr=".75rem" />,
    isActive: true
  };
  
  if (!messages.length) { 
    return <Loader />
  }
  return (<>
    <AIAssistantChat onClickSuggestion={onClickSuggestion} suggestions={suggestions} history={messages} onSubmit={(data) => onSubmit(data as string)} image={<Avatar src="./assistant_logo.png" h="2.5rem" w="2.5rem" p=".1rem" borderRadius="50%" m="0 .5rem 0 0" />} conversations={[conversation]} title={"AI Assistant in Q&A"} disabled={Array.isArray(suggestions) && !!suggestions.length || chatCompleted} />
  </>)
}
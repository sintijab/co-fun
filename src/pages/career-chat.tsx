import { AIAssistantChat, Box, ButtonList, CareerIcon, InputLoader, LipsIcon, Loader } from "@co-fun/ui";
import { socket } from "../utils/socket/socketJobDiscovery";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobOffer, closeOffers, JobOfferTechnical, selectJobOffers } from "../slices/jobOfferFetch";
import { AppDispatch } from "../store";
import { socketInit } from "../utils/socket/socketCommon";

type IButtonSelect = { title: string; description: string; answers: { answer: string; key: string }[] };

type IResponse = { type: string; activeKey: string, id: string; questions: string[], data: any, suggestions: { answer: string; key: string }[], style?: { display: string }, payload: any };

const getQuestions = (messages: { response: string, author?: string }[], response: { activeKey: string, questions: string[], suggestions: { answer: string; key: string }[] }) => {
  let updated = [];
  updated = [
    ...messages,
    { response: response?.questions[0] }
  ];
  if (!!response.questions && response.questions.length > 0) {
    updated = [
      ...messages,
      ...(response?.questions?.map((question: string) => ({ response: question })))
    ];
  }
  return updated;
}


export default function Chat() {
  const [messages, setMessages] = useState<{ response: string, author?: string }[]>([])
  const [suggestions, setSuggestions] = useState<{ answer: string, key: string }[]>([])
  const [buttonSelect, setButtonSelect] = useState<{ title: string, description?: string, answers: { answer: string; key: string }[], style?: { display: string } }>()
  const dispatch = useDispatch<AppDispatch>();
  const [activeKey, setActiveKey] = useState<string>();
  const [id, setId] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const offersList = useSelector(selectJobOffers);

  const processFiles = async (jobs: JobOfferTechnical['offers'][], data: string, updatedContent: { response: string, author?: string }[]) => {
    let resultText = "";

    for (const job of jobs) {
      const jobDetails = `Job: ${job?.title || "N/A"} ${job?.apply || "N/A"}  (${job?.url || "No URL"})\nTech: ${job?.content || "No Description"}`;

      try {
        // @ts-ignore-next-line
        const response = await puter.ai.chat(
          `You are an expert in recruitment. If this role- ${data} is not relevant to the following job description then return nothing:\n${jobDetails}\n\n. But if it is relate then format it in HTML rich text content and return short explanation why it suitable, add title that is linked with url, followed by apply link below the list of tech stack. Links must be underlined, and tech must be separated by commas. For no matching results return text "Sorry, we could not find any suitable job offers". Apply additional line break after every apply link, and add appropriate emoji to the beginning of the job title. Tech stack label font is bold, replace it with the word tech to keep it shorter, underline all links and job title. Do not write output commentary.`
        );
        // const response = await puter.ai.chat(
        //   `You are an expert in recruitment and please return only relevant information for ${data} role, skip everything else. Format following in HTML rich text content and return title that is linked with url, followed by apply link below the list of tech stack. All the links must be underlined, and tech must be separated by commas from the following job listings:\n${jobDetails}\n\n. For no matching results return text "Sorry, we could not find any suitable job offers". Apply additional line break after every apply link, and add appropriate emoji to the beginning of the title. Tech Stack label font is bold. Do not write output commentary.`
        // );

        if (response.message.content.length && !response.message.content.includes("Sorry")) {
          resultText += response.message.content + "\n\n";
          resultText = resultText.replace(/```html|```/g, '');
        }
        if (resultText.length > 5) {
          let updated = [
            ...updatedContent,
            { response: <div dangerouslySetInnerHTML={{ __html: resultText }} /> },
          ];
          // @ts-ignore-next-line
          setMessages(updated);
        }
      } catch (error) {
        console.error("Error processing job:", error);
      }
    }
    if (resultText.length < 5) {
      let updated = [
        ...updatedContent,
        { response: "Sorry, we could not find any suitable job offers." }
      ];
      // @ts-ignore-next-line
      setMessages(updated);
      dispatch(addJobOffer({ connection: "close", ...email && { user_email: email } }))
    }
    setIsLoading(false)
    dispatch(addJobOffer({ connection: "close", ...email && { user_email: email } }))
  };

  socketInit(socket);

  useEffect(() => {
    const timer = setTimeout(() =>
      socket.volatile.emit('init', (response: { activeKey: string, questions: string[], suggestions: { answer: string; key: string }[] }) => {
        if (!activeKey || !messages.length) {
          const updated = getQuestions(messages, response);
          setMessages(updated);
          setActiveKey(response.activeKey);
          if (response.suggestions) {
            setSuggestions(response.suggestions);
          }
        }
      })
      , 1000);
    return () => clearTimeout(timer);
  }, [])

  useEffect(() => {
    dispatch(closeOffers())
  }, [])

  const onSubmit = (data: string) => {
    setIsLoading(true)
    let updated = [
      ...messages,
      { response: data, author: 'Sintija' }
    ];
    setMessages(updated);
    socket.volatile.emit('update_item', activeKey, data, async (response: IResponse & IButtonSelect) => {
      setIsLoading(false)
      try {
        setId(response.id);
        dispatch(addJobOffer({ [id as string]: data }))
      } catch (e) {
        console.log(e)
      }
      setActiveKey(response.activeKey);
      updated = getQuestions(updated, response);
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
      setMessages(updated)
      if (response.type === "button_select") {
        setButtonSelect({ title: response.title, description: response.description, answers: response.answers, style: response.style })
      }
      if (response.activeKey === "profession" && offersList.length && offersList[0]?.offers) {
        setIsLoading(true)
        processFiles(offersList[0]?.offers as any, data, updated);
      }
    });
  };
  const email = "syntia.birgele@gmail.com";

  const onClickSuggestion = (i: number) => {
    setIsLoading(true)
    const suggestion = suggestions[i].answer;
    setSuggestions([])
    socket.volatile.emit('update_item', activeKey, suggestions[i].key, (response: IResponse & IButtonSelect) => {
      setIsLoading(false)
      let updated = [
        ...messages,
        { response: suggestion, author: 'Sintija' }
      ];
      setId(response.id);
      if (activeKey === "init") {
        dispatch(addJobOffer({ connection: "open", ...email && { user_email: email } }))
      }
      updated = getQuestions(updated, response);
      setMessages(updated);
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
      setActiveKey(response.activeKey);
      if (response.type === "button_select") {
        setButtonSelect({ title: response.title, description: response.description, answers: response.answers, style: response.style })
      }
    });
  }

  const onOptionSelect = (key: string) => {
    setIsLoading(true)
    const res = buttonSelect?.answers.find(btn => btn.key === key)!;
    let updated = [
      ...messages,
      { response: res.answer, author: 'Sintija' }
    ];
    // activeKey || res.key - activeKey is next predictable question and res.key is for the dynamic path
    socket.volatile.emit('update_item', activeKey || res.key, res.key, (response: IResponse & IButtonSelect) => {
      if (response.id === "close") {
        dispatch(addJobOffer({ connection: "close", ...email && { user_email: email } }))
      }
      setIsLoading(false)
      dispatch(addJobOffer({ [id as string]: res.key, ...response.payload && { [response.id as string]: response.payload } }))
      setActiveKey(response.activeKey);
      setId(response.id);
      updated = getQuestions(updated, response);
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
      setMessages(updated);
      setButtonSelect(undefined)
      if (response.type === "button_select") {
        setButtonSelect({ title: response.title, description: response.description, answers: response.answers, style: response.style })
      }
    });


  }
  const conversation = {
    title: 'AI Assistant in Career Discovery',
    category: 'Discovery & Analytics',
    time: '1 min',
    image: <CareerIcon h="2.5rem" w="2.5rem" p=".3rem" borderRadius="50%" border="1px" mr=".75rem" />,
    isActive: true
  };
  if (!messages.length) {
    return <Loader />
  }

  return (<>
    <AIAssistantChat theme="lilac" onClickSuggestion={onClickSuggestion} suggestions={suggestions} history={messages} onSubmit={(data) => onSubmit(data as string)} image={<CareerIcon h="2.5rem" w="2.5rem" p=".1rem" borderRadius="50%" m="0 .5rem 0 0" />} conversations={[conversation]} title={"AI Assistant in Career Discovery"} disabled={!!buttonSelect?.answers?.length || !!suggestions.length || !!isLoading || offersList[0]?.connection === "close"}>
      {buttonSelect && <Box m={["1rem 0", "1rem 0 1rem 5rem"]}><ButtonList style={buttonSelect.style} title={buttonSelect.title} description={buttonSelect?.description} answers={buttonSelect.answers} onClick={onOptionSelect} /></Box>}
      {isLoading && <Box pl="1.3rem"><InputLoader /></Box>}
    </AIAssistantChat>
  </>)
}
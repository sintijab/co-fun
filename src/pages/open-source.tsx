import React, { useState } from 'react';
import Head from 'next/head';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { AIAssistantChat, Input, Messages, ButtonPrimary } from '../libs/co-fun-ui/src/lib/co-fun-ui';
// import { AIAssistantChat, Messages, Input } from '@co-fun/ui';

const demoHistory = [
  { response: 'Hello! How can I help you today?', author: 'AI' },
  { response: 'What is @co-fun/ui?', author: 'User' },
  { response: '@co-fun/ui is an open-source design system for building AI chatbots and digital products.', author: 'AI' },
];

function ShowCodeSection({ code }: { code: string }) {
  const [show, setShow] = useState(false);
  return (
    <Box mb={4}>
      <Box display="flex" justifyContent="flex-end">
        <ButtonPrimary
          size="sm"
          borderRadius="2rem"
          fontSize="0.95rem"
          px="1.5rem"
          py="1.2rem"
          background="#6C63FF"
          color="white"
          fontWeight={500}
          fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif"
          boxShadow="0 2px 8px rgba(108,99,255,0.10)"
          onClick={() => setShow(s => !s)}
        >
          {show ? 'Hide code' : 'Show code'}
        </ButtonPrimary>
      </Box>
      {show && (
        <Box as="pre" bg="#F4F4F4" p={4} borderRadius="md" fontSize="sm" whiteSpace="pre-wrap" mt={2}>
          {code}
        </Box>
      )}
    </Box>
  );
}

export default function DesignSystemDemo() {
  return (
    <>
      <Head>
        <title>@co-fun/ui Design System Demo</title>
      </Head>
      <Box minH="100vh" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif">
        <Flex direction="column" align="center" maxW="960px" mx="auto" py={12}>
          <Box w="100%" display="flex" flexDirection={["column", "row"]} alignItems="stretch" justifyContent="space-between" minH="320px" mb={4}>
            <Box flex="1" pl={[0, '2rem', '4rem']} pr={[0, 0, '2rem']} display="flex" flexDirection="column" justifyContent="center" minW={["100%", "50%", "50%"]} zIndex={2}>
              <Heading as="h1" size="2xl" mb={4} fontWeight="700" letterSpacing="-0.01em" color="#161616" fontFamily="'Inter', sans-serif">
                @co-fun/ui
              </Heading>
              <Text fontSize={["1.1rem", "1.25rem"]} color="#525252" mb={0} maxW={["100%", "400px"]} textAlign="left" fontFamily="'Inter', sans-serif">
                @co-fun/ui is an open-source design system for building AI chatbots and digital products. It offers a unified design language, reusable code, and clear guidelines for human-AI interaction.
              </Text>
            </Box>
            <Box flex="1" display="flex" justifyContent="center" alignItems="center" minH="320px" py={2} position="relative" overflow="visible" minW={["100%", "50%", "50%"]}>
              <img src="/glass.jpg" alt="Glass"
                style={{
                  position: 'relative',
                  left: 0,
                  top: '-48px',
                  transform: 'none',
                  height: '340px',
                  width: '100%',
                  maxWidth: '100%',
                  borderRadius: '32px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  zIndex: 1,
                  overflow: 'hidden',
                }}
                className="glass-img-responsive"
              />
              <style jsx>{`
                @media (max-width: 767px) {
                  .glass-img-responsive {
                    position: relative !important;
                    left: 0 !important;
                    top: 0 !important;
                    transform: none !important;
                    height: 240px !important;
                    width: 100% !important;
                    margin-bottom: 0 !important;
                    z-index: 1 !important;
                  }
                }
                @media (min-width: 768px) {
                  .glass-img-responsive {
                    position: absolute;
                    left: 50%;
                    top: calc(50% - 48px);
                    transform: translate(-50%, -50%);
                    height: 440px;
                    width: 520px;
                    border-radius: 32px;
                    box-shadow: 0 12px 48px rgba(0,0,0,0.20);
                    object-fit: cover;
                    object-position: center;
                    overflow: hidden;
                  }
                }
              `}</style>
            </Box>
          </Box>
          {/* --- BUSINESS VALUE SECTION --- */}
          <Box w="100%" bg="white" borderRadius="2xl" boxShadow="0 4px 24px rgba(0,0,0,0.10)" p={[6, 10]} mt={[4, 8]} mb={5}>
            <Text color="#525252" mb={2} fontSize="1.05rem" fontFamily="'Inter', sans-serif" lineHeight={2} textAlign="justify" fontWeight={400}>Start by experimenting with our open-source components to build the first prototype and find the best AI solution for your business.</Text>
            <Text color="#525252" mb={4} fontSize="1.05rem" fontFamily="'Inter', sans-serif" lineHeight={2} textAlign="justify" fontWeight={400}><b>Actionable Data Insights</b><br/>AI systems in comparison with traditional software continuously process large volumes of customer and operational data, uncovering actionable insights in real time. Digitalization with AI can support businesses to reduce operational costs and services required for the software and development, optimize inventories, adjust pricing dynamically, detect fraud, and proactively identify market trends—all contributing to better financial outcomes.</Text>
            <Flex wrap="wrap" gap={6} justify="center" mt={2}>
              {/* Modern Card Grid with Glass Background and Icon */}
              {[
                {
                  title: 'Insurance',
                  icon: 'shield',
                  desc: 'Agentic chatbots qualify leads, match prospects with policies, and guide customers through claims—reducing acquisition costs, speeding onboarding, and improving retention.'
                },
                {
                  title: 'Construction',
                  icon: 'construction',
                  desc: 'AI agents generate custom price quotes by analyzing project specs, regulations, and supplier data, providing instant, accurate bids and reducing cycle time.'
                },
                {
                  title: 'Finance',
                  icon: 'finance',
                  desc: 'Agents continuously monitor transactions, flag fraud, and optimize investment strategies with real-time decision-making, protecting revenue and customer trust.'
                },
                {
                  title: 'Customer Support',
                  icon: 'support',
                  desc: 'Advanced agents infer customer intent, solve complex queries, and escalate only when needed, reducing churn and boosting customer satisfaction.'
                },
                {
                  title: 'Healthcare',
                  icon: 'health',
                  desc: 'Automate patient intake, triage, and records management, improving throughput while minimizing errors.'
                },
                {
                  title: 'Retail & Supply Chain',
                  icon: 'retail',
                  desc: 'Manage inventories, respond to demand shifts, and optimize logistics—all without manual checks—leading to lower costs and faster delivery.'
                }
              ].map((item, idx) => (
                <Box key={item.title} position="relative" bg="rgba(255,255,255,0.55)" borderRadius="36px" boxShadow="0 8px 32px rgba(0,0,0,0.13)" p={6} minW="220px" maxW="280px" flex="1 1 220px" display="flex" flexDirection="column" alignItems="center" overflow="hidden" backdropFilter="blur(12px)">
                  <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0} style={{ filter: 'blur(18px)', opacity: 0.18 }}>
                    <img src="/glass.jpg" alt="Glass background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                  <Box mb={3} zIndex={1} bg="rgba(255,255,255,0.7)" borderRadius="full" p={3} display="flex" alignItems="center" justifyContent="center" boxShadow="0 2px 8px rgba(0,0,0,0.10)">
                    {item.icon === 'shield' && (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4l10 4v6c0 7.732-6.268 14-14 14S2 21.732 2 14V8l10-4z" fill="#6C63FF"/><path d="M16 4l10 4v6c0 7.732-6.268 14-14 14S2 21.732 2 14V8l10-4z" stroke="#fff" strokeWidth="2"/></svg>
                    )}
                    {item.icon === 'construction' && (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="18" width="20" height="8" rx="2" fill="#FFA726"/><rect x="10" y="10" width="12" height="8" rx="2" fill="#FFB74D"/><rect x="14" y="4" width="4" height="6" rx="2" fill="#FFD54F"/></svg>
                    )}
                    {item.icon === 'finance' && (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#26C6DA"/><rect x="10" y="10" width="12" height="12" rx="2" fill="#fff"/><rect x="14" y="14" width="4" height="4" rx="2" fill="#26C6DA"/></svg>
                    )}
                    {item.icon === 'support' && (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#7C4DFF"/><rect x="10" y="12" width="12" height="8" rx="2" fill="#fff"/><rect x="14" y="8" width="4" height="4" rx="2" fill="#fff"/></svg>
                    )}
                    {item.icon === 'health' && (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="12" y="8" width="8" height="16" rx="4" fill="#66BB6A"/><rect x="8" y="12" width="16" height="8" rx="4" fill="#A5D6A7"/></svg>
                    )}
                    {item.icon === 'retail' && (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="8" y="16" width="16" height="8" rx="2" fill="#FFD600"/><rect x="12" y="8" width="8" height="8" rx="2" fill="#FFEA00"/><rect x="14" y="4" width="4" height="4" rx="2" fill="#FFF9C4"/></svg>
                    )}
                  </Box>
                  <Heading as="h3" fontSize="1.18rem" mb={2} color="#232323" fontWeight={700} fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" letterSpacing="-0.01em" zIndex={1} textAlign="center">{item.title}</Heading>
                <Text fontSize="1rem" color="#444" textAlign="center" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" fontWeight={400} zIndex={1} lineHeight={1.7} px={3}>{item.desc}</Text>
                </Box>
              ))}
            </Flex>
          </Box>
          {/* --- COMPONENTS --- */}
          {/* --- AI Assistant Chat Example --- */}
          <Box w="100%" bg="white" borderRadius="2xl" boxShadow="0 4px 24px rgba(0,0,0,0.10)" p={[6, 10]} mb={5} position="relative" overflow="visible">
            <Heading as="h2" mb={4} color="#161616" fontWeight="600" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" fontSize={['1.15rem','1.5rem','1.75rem']}>AI Assistant Chat Example</Heading>
            <Text mb={2} color="#525252" fontSize="1.05rem" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" pr={[0, 180]} lineHeight={2} textAlign="justify" fontWeight={400}>
              AI chat assistant supports agentic workflows, suggestions, and multi-turn conversations. Integrates with widely used AI models for natural language processing, dialogue management, and custom task assignment and automation.<br/><br/>
              <b>UI Features:</b> Responsive layout, customizable theme, inline/fixed positioning, avatar and title support, suggestion buttons, and multi-agent conversation display. Integrates with backend APIs and open-source agentic frameworks.<br/>
              <b>Usability:</b> Accessibility, leads and data collection and analyzsis, and fast user input. Adapts to mobile and desktop devices.
            </Text>
            <Box mb={2}><ShowCodeSection code={`<AIAssistantChat\n  inline={true}\n  author=\"CoffeeBot\"\n  theme=\"lilac\"\n  image={null}\n  width={[\"100%\", \"100%\"]}\n  history={[/* ... */]}\n  title=\"AI Assistant\"\n  suggestions={[{ answer: 'What else you can do?' }, { answer: 'Show me a demo.' }]}\n  onSubmit={msg => alert('Submitted: ' + msg)}\n  onClickSuggestion={i => alert('Suggestion clicked: ' + i)}\n  disabled={false}\n  conversations={[{/* ... */}]}\n/>`} /></Box>
            <Box mt={6}><AIAssistantChat
              inline={true}
              author="CoffeeBot"
              theme="lilac"
              image={null}
              width={["100%", "100%"]}
              history={[
                { response: "User: Hey, did you just schedule my coffee break?", author: "User" },
                { response: "CoffeeBot: Yes. Your coffee will now be delivered by drone every day at 10am.", author: "CoffeeBot" },
                { response: "User: What if I want tea instead?", author: "User" },
                { response: "CoffeeBot: Switching beverage protocol.", author: "CoffeeBot" },
                { response: "User: Can you automate my meetings too?", author: "User" },
                { response: "CoffeeBot: Already done. All meetings are now replaced with cat Agents typing on keyboards.", author: "CoffeeBot" },
                { response: "User: This is the real deal.", author: "User" }
              ]}
              title="AI Assistant"
              suggestions={[{ answer: 'What can you do?' }, { answer: 'Show me a demo.' }]}
              onSubmit={msg => alert('Submitted: ' + msg)}
              onClickSuggestion={i => alert('Suggestion clicked: ' + i)}
              disabled={false}
              conversations={[{
                author: "AutoBot",
                image: null,
                time: "2025-07-20T10:00:00Z",
                title: "When Automation Gets Too Smart",
                category: "Humor",
                isActive: true
              }]}
            /></Box>
          </Box>
          {/* --- Messages Component --- */}
          <Box w="100%" bg="white" borderRadius="2xl" boxShadow="0 4px 24px rgba(0,0,0,0.10)" p={[6, 10]} mb={5} position="relative" overflow="visible">
            <Heading as="h2" mb={4} color="#161616" fontWeight="600" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" fontSize={['1.15rem','1.5rem','1.75rem']}>Messages</Heading>
            <Text mb={2} color="#525252" fontSize="1.05rem" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" pr={[0, 180]} lineHeight={2} textAlign="justify" fontWeight={400}>
              The <b>Messages</b> renders chat histories for conversational UIs, notifications, and audit logs. Integrates with open-source frameworks and widely used AI models for message parsing, summarization, and classification.<br/><br/>
              <b>UI Features:</b> Message bubbles, author identification, timestamp rendering, and scrollable containers. Customizable for enterprise and research applications.<br/>
              <b>Usability:</b> Readable, scalable to long conversations, and embeddable in cards or modal dialogs for notifications.
            </Text>
            <Box mb={2}><ShowCodeSection code={`<Messages author=\"AI\" theme=\"lilac\" history={demoHistory} title=\"AI Assistant\" />`} /></Box>
            <Box mt={6}><Messages author="AI" theme="lilac" history={demoHistory} title="AI Assistant" /></Box>
          </Box>
          {/* --- Input Component --- */}
          <Box w="100%" bg="white" borderRadius="2xl" boxShadow="0 4px 24px rgba(0,0,0,0.10)" p={[6, 10]} position="relative" overflow="visible">
            <Heading as="h2" mb={4} color="#161616" fontWeight="600" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" fontSize={['1.15rem','1.5rem','1.75rem']}>Input</Heading>
            <Text mb={2} color="#525252" fontSize="1.05rem" fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" pr={[0, 180]} lineHeight={2} textAlign="justify" fontWeight={400}>
              The <b>Input</b> facilitates user message entry, supporting contextual suggestions and submit handling. Integrates with backend services and agentic orchestration flows, including widely used AI models for tasks such as intent classification, entity extraction, and response generation.<br/><br/>
              <b>UI Features:</b> Suggestion buttons, disabled state management, theme customization, and feedback mechanisms. Designed for reliable input in production chatbots and workflow automation.<br/>
              <b>Usability:</b> Accessible touch targets, keyboard navigation, and clear focus indicators for mobile and desktop environments.
            </Text>
            <Box mb={2}><ShowCodeSection code={`<Input theme=\"lilac\" disabled={false} suggestions={[{ answer: 'Try me!' }]} onSubmit={msg => alert('Input: ' + msg)} />`} /></Box>
            <Box mt={6}><Input theme="lilac" disabled={false} suggestions={[{ answer: 'Try me!' }]} onSubmit={msg => alert('Input: ' + msg)} /></Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

'use client';

import { Box, CoFunUiProvider, Flex, Footer, NavigationTop } from '@co-fun/ui';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { GlobalStyles } from '../providers/GlobalStyles';
import { store, persistor } from '../store';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AspectRatio } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const [isChatVisible, toggleWidget] = useState<boolean | null>(null);
  const iframeWidgetDesktop = useRef(null);
  const isChat = router.asPath.includes('chat');
  const isIndex = router.asPath === '/';
  const isFullLayout = router.asPath.includes('/explore') || router.asPath.includes('/academy') || router.asPath.includes('/trends') || isIndex || isChat || router.asPath === '/home' || router.asPath.includes('/home#');;

  useEffect(() => {
    const healthCheck = async () => {
      try {
        const res = await fetch(`https://socket-io-3i32.onrender.com/health`);
        const formatted = await res.json();
        if (formatted.message) {
          toggleWidget(true);
        }
      } catch (e) {
        console.log(e)
      }
    }
    healthCheck();
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CoFunUiProvider>
          <GlobalStyles />
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          {router.asPath !== '/explore' && <NavigationTop links={[
            {
              label: 'Creators',
              href: 'https://cofun.digital/explore'
            },
            {
              label: 'Startups',
              href: 'https://cofun.digital/funding'
            },
            {
              label: 'Features',
              href: 'https://cofun.digital/features'
            },
            {
              label: 'Products',
              href: 'https://cofun.digital/products'
            },
            {
              label: 'Pricing',
              href: 'https://cofun.digital/home#pricing'
            },
            {
              label: 'Contact',
              href: 'https://cofun.digital/contact',
            }
          ]} />}
          {!isFullLayout && <Flex direction="column" margin={["3rem .5rem", "5rem 10rem", "5rem 20rem"]} flexWrap="wrap">
            <Component {...pageProps} />
          </Flex>}
          {isFullLayout &&
            <Component {...pageProps} />
          }
          {!isChat &&
            <Box m="3.5rem 1rem 1rem" position="relative" height="max-content">
              <Footer {
                ...{
                  columns: [
                    {
                      title: 'Use cases',
                      links: [
                        {
                          label: 'AI assistance',
                          href: '/assistance'
                        },
                        {
                          label: 'Content optimization',
                          href: '/optimization'
                        },
                        {
                          label: 'Content generation',
                          href: '/generation'
                        },
                        {
                          label: 'Initiatives',
                          href: '/initiatives'
                        },
                        {
                          label: 'Action analysis',
                          href: '/analysis'
                        },
                        {
                          label: 'Projects',
                          href: '/projects'
                        },
                        {
                          label: 'Team collaboration',
                          href: '/collaboration'
                        }
                      ]
                    },
                    {
                      title: 'Explore',
                      links: [
                        {
                          label: 'Academy',
                          href: '/academy'
                        },
                        {
                          label: 'Integrations',
                          href: '/integrations'
                        },
                        {
                          label: 'Funding',
                          href: '/funding'
                        },
                        {
                          label: 'Development features',
                          href: '/development'
                        },
                        {
                          label: 'Form creation',
                          href: '/forms'
                        },
                        {
                          label: 'Collaboration features',
                          href: '/collaboration'
                        },
                        {
                          label: 'Design process',
                          href: '/features'
                        }
                      ]
                    },
                    {
                      title: 'Resources',
                      links: [
                        {
                          label: 'Analytics',
                          href: '/analytics'
                        },
                        {
                          label: 'Community',
                          href: '/community'
                        },
                        {
                          label: 'Events',
                          href: '/events'
                        },
                        {
                          label: 'Blog',
                          href: '/academy'
                        },
                        {
                          label: 'Support',
                          href: '/support'
                        },
                        {
                          label: 'Developers',
                          href: '/developers'
                        },
                        {
                          label: 'Reource library',
                          href: '/resources'
                        }
                      ]
                    }
                  ],
                }
              } />
            </Box>}
          {/* {isIndex && isChatVisible && <AspectRatio ratio={3 / 4} position="fixed" bottom="4rem" right={["1rem", "4rem"]} zIndex={1} display={["none", "unset"]}>
            <iframe ref={iframeWidgetDesktop} src="https://ai-career-assistant.cofun.digital/" style={{ position: 'unset', borderRadius: "1.1rem", boxShadow: '0 -3px 12px rgba(0,0,0,0.05)', width: '20rem', height: "30rem", padding: '0 .2rem .8rem .2rem', background: 'primary.white' }} />
          </AspectRatio>}
          {isIndex && isChatVisible && <AspectRatio ratio={3 / 4} position="fixed" bottom="4rem" right={["1rem", "4rem"]} zIndex={1} display={["unset", "none"]}>
            <iframe src="https://ai-career-assistant.cofun.digital/" style={{ position: 'unset', borderRadius: "1.1rem", boxShadow: '0 -3px 12px rgba(0,0,0,0.05)', width: '20rem', height: "30rem", padding: '0 .2rem .8rem .2rem', background: 'primary.white' }} />
          </AspectRatio>}
          {isIndex && <Box background='primary.white' onClick={() => toggleWidget(isChatVisible === null ? true : !isChatVisible)} cursor="pointer" position="fixed" bottom="1rem" right={["1rem", "2rem"]} zIndex={10} boxShadow='0 -3px 12px rgba(0,0,0,0.1)' borderRadius="1.7rem">
            <img src="career.png" width={60} height={60} />
            {isChatVisible === null && <Box position="absolute" bottom="-1px" right="0px" width=".85rem" height=".85rem" borderRadius="50%" background="button.action" color="white" fontSize="10pt" display={["none", "unset"]} />}
            {isChatVisible && <Box position="absolute" bottom="-1px" right="0px" width=".85rem" height=".85rem" borderRadius="50%" background="button.action" color="white" fontSize="10pt" display={["unset", "none"]} />}
          </Box>} */}
        </CoFunUiProvider>
      </PersistGate>
    </Provider>
  );
}
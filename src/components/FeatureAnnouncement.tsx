import React from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { TextBase } from '../libs/co-fun-ui-package/src/foundations';

export default function FeatureAnnouncement() {
  return (
    <Flex
      w="100%"
      maxW="540px"
      alignItems="center"
      p={6}
      borderRadius="2xl"
      boxShadow="0 4px 24px rgba(0,0,0,0.10)"
      bg="whiteAlpha.700"
      position="relative"
      overflow="hidden"
      height="100%"
      sx={{
        background: [
        // mobile/tablet: center center
        `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/aI9zcKTt2nPbZzGL.avif') center center/cover no-repeat`,
        // desktop: bottom center
        `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/aI9zcKTt2nPbZzGL.avif') bottom center/cover no-repeat`
        ]
    }}
    >
      <Flex direction="column" align="center">
        <TextBase textStyle="heading" fontSize={["1.25rem", "1.45rem"]} mb={3} mr={3} color="#232323" fontWeight={700} fontFamily="'Inter', 'IBM Plex Sans', 'Arial', sans-serif" letterSpacing="-0.01em" textAlign="center">
          🎧 Listen: The Design of Everyday Life
        </TextBase>
        <audio
          controls
          style={{
            width: '100%',
            maxWidth: 320,
            background: 'transparent',
            borderRadius: '2xl',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            marginBottom: 12
          }}
        >
          <source src="/design_of_everyday_life.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <TextBase textStyle="project-descr" fontSize="1rem" color="#525252" mb={4} textAlign="center">
          Discover insights on discovery of Artifial Intelligence solutions in our work in our latest feature.
        </TextBase>
        <NextLink href="/design-everyday-life" passHref legacyBehavior>
          <Button as={Link} color="primary.green" variant="link" borderRadius="xl">
            Read & Listen
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
}
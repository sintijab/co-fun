import React from 'react';
import { Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { fluorescentColors } from '../Sketch';
import { getContrastRatio } from '../../utils';
import { shadeColor } from '../../utils/colors';

const contentData = [
  {
    text: "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
    author: "C.G. Jung",
    colorClass: "blue"
  },
  {
    text: "Who in the world am I? Ah, that's the great puzzle.",
    author: "Lewis Carroll, Alice's Adventures in Wonderland",
    colorClass: "cyan"
  },
  {
    text: "",
    colorClass: "cyan"
  },
  {
    text: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
    colorClass: "red"
  },
  {
    text: "Before joy, anger, sadness and happiness are expressed, they are called the inner self; when they are expressed to the proper degree, they are called harmony.",
    author: "Confucius",
    colorClass: "green"
  },
  {
    text: "",
    colorClass: "blue"
  },
  {
    text: "Every view of the world that becomes extinct, every culture that disappears, diminishes a possibility of life.",
    author: "Octavio Paz",
    colorClass: "red"
  },
  {
    text: "",
    colorClass: "orange"
  },
  {
    text: "",
    colorClass: "green"
  },
  {
    text: "We have the ability to achieve, if we master the necessary goodwill, a common global society blessed with a shared culture of peace that is nourished by the ethnic, national and local diversities that enrich our lives.",
    author: "Mahnaz Afkhami",
    colorClass: "yellow"
  },
  {
    text: "",
    colorClass: "blue"
  },
  {
    text: "",
    colorClass: "yellow"
  },
  {
    text: "",
    colorClass: "blue"
  },
  {
    text: "",
    colorClass: "blue"
  },
  {
    text: "The universe is not silent; its music is woven into the fabric of existence.",
    author: "Carl Sagan, Cosmos",
    colorClass: "yellow"
  },
  {
    text: "Each sound, each silence in the gamelan, carries centuries of spirit and tradition, uniting the players in a sacred dance of time.",
    author: "Michael Tenzer, Balinese Gamelan Music",
    colorClass: "red"
  },
  {
    text: "",
    colorClass: "blue"
  },
  {
    text: "",
    colorClass: "green"
  },
  {
    text: "",
    colorClass: "green"
  },
  {
    text: "In Bali, art is not separate from life; it is a living, breathing part of existence.",
    author: "Miguel Covarrubias, Island of Bali",
    colorClass: "yellow"
  },
  {
    text: "",
    colorClass: "orange"
  },
  {
    text: "",
    colorClass: "red"
  },
  {
    text: "",
    colorClass: "red"
  },
  {
    text: "The gamelan's cycles remind us that every ending is a beginning, and all things are interconnected.",
    author: "Michael Tenzer, Balinese Gamelan Music",
    colorClass: "red"
  }
];

const getColor = (bg: string) => {
  let randomColor = fluorescentColors[Math.floor(Math.random() * 89)];
  const ratio = getContrastRatio(randomColor, bg);
  if (ratio > 3) {
    return randomColor;
  } else {
    const lightened = shadeColor(randomColor, 30);
    if (getContrastRatio(lightened, bg) > 3) {
      return lightened;
    } else {
      const darker = shadeColor(randomColor, -30);
      if (getContrastRatio(darker, bg) > 3) {
        return darker;
      }
    }
  }
  if (getContrastRatio('#ffffff', bg) > 3) {
    return '#ffffff';
  } else {
    return '#212121';
  }
}

const colors: any = {
  cyan: { bg: fluorescentColors[Math.floor(Math.random() * 89)], get color() { return getColor(this.bg) }},
  yellow: { bg: fluorescentColors[Math.floor(Math.random() * 89)], get color() { return getColor(this.bg) }},
  purple: { bg: fluorescentColors[Math.floor(Math.random() * 89)], get color() { return getColor(this.bg) }},
  green: { bg: fluorescentColors[Math.floor(Math.random() * 89)], get color() { return getColor(this.bg) }},
  red: { bg: fluorescentColors[Math.floor(Math.random() * 89)], get color() { return getColor(this.bg) }},
  blue: { bg: fluorescentColors[Math.floor(Math.random() * 89)], get color() { return getColor(this.bg) }},
  orange: { bg: fluorescentColors[Math.floor(Math.random() * 89)], get color() { return getColor(this.bg) }},
};

const description = `This auto-generated layout displays quotes and book recommendations from AI radio moderation. It analyzed open-ended feedback about the sound listening experiences over a month and associated responses with similar narratives selecting influential writers.`

// Generate a random font size within a range
const getRandomFontSize = (min: number, max: number) => `${Math.random() * (max - min) + min}rem`;

const WordCloud: React.FC = () => (
  <Grid
    templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
    templateRows="repeat(1, 1fr)"
    maxWidth="100%"
    width="100%"
    mx="auto"
    fontFamily="ui-sans-serif, system-ui, sans-serif"
  >
    {contentData.map((item, index) => (
      <GridItem
        key={index}
        colSpan={Math.random() * (3 - 1) + 1}
        rowSpan={Math.random() * (3 - 2) + 2}
        bg={colors[item.colorClass].bg}
        color={colors[item.colorClass].color}
        maxHeight="700px"
        display={[item.text ? "grid" : "none", "grid"]}
        placeContent="center"
        p="1ch"
        textAlign="center"
        sx={{
          writingMode: 'horizontal-tb',
          textOrientation: 'upright',
          wordBreak: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        <VStack spacing={1} overflow="none">
          <Text fontSize={[getRandomFontSize(1.5, 2.5), getRandomFontSize(1.5, 3)]} lineHeight="1.2" fontFamily="Inter">
            {item.text}
          </Text>
          {item.author && (
            <Text fontSize={[getRandomFontSize(0.8, 1), getRandomFontSize(0.8, 1.5)]} fontWeight="300" fontFamily="Inter">
              — {item.author}
            </Text>
          )}
        </VStack>
      </GridItem>
    ))}
  </Grid>
);

export default WordCloud;

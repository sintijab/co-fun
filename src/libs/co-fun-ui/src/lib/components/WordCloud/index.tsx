import React from 'react';
import { Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { fluorescentColors } from '../Sketch';
import { getContrastRatio } from '../../utils';
import { shadeColor } from '../../utils/colors';

const contentData = [
  { text: "When journalism is silenced, literature must speak. Because while journalism speaks with facts, literature speaks with truth.", author: "Seno Gumira Ajidarma, Jazz, Perfume & the Incident", colorClass: "yellow" },
  { text: "When literature is silenced, the soul of a nation is left to wander unspoken.", author: "Pramoedya Ananta Toer", colorClass: "cyan" },
  { text: "", colorClass: "cyan" },
  { text: "Traditional music tells stories that words alone cannot—it carries the soul of a people.", author: "Michael Tenzer, Balinese Gamelan Music", colorClass: "red" },
  { text: "Whoever sincerely does it, will get it.", author: "Ahmad Fuadi, The Land of Five Towers", colorClass: "blue" },
  { text: "", colorClass: "blue" },
  { text: "Whoever is serious, will succeed.", author: "Ahmad Fuadi, The Land of Five Towers", colorClass: "yellow" },
  { text: "", colorClass: "orange" },
  { text: "", colorClass: "green" },
  { text: "Whoever sincerely does it, will get it. Whoever is serious, will succeed.", author: "Ahmad Fuadi, The Land of Five Towers", colorClass: "blue" },
  { text: "", colorClass: "blue" },
  { text: "", colorClass: "yellow" },
  { text: "", colorClass: "blue" },
  { text: "", colorClass: "blue" },
  { text: "The colors, the perfumes, the dances, the music of Bali stay with you because they all penetrate deeper into our psychic life.", author: "Anaïs Nin", colorClass: "yellow" },
  { text: "", colorClass: "red" },
  { text: "", colorClass: "blue" },
  { text: "", colorClass: "green" },
  { text: "", colorClass: "green" },
  { text: "Music is not bound by time; it carries the essence of the past into the present and beyond.", author: "Michael Tenzer, Balinese Gamelan Music", colorClass: "yellow" },
  { text: "", colorClass: "orange" },
  { text: "", colorClass: "red" },
  { text: "", colorClass: "red" },
  { text: "The universe is not silent; its music is woven into the fabric of existence.", author: "Carl Sagan, Cosmos", colorClass: "green" },
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
          writingMode: item.vertical ? 'vertical-rl' : 'horizontal-tb',
          textOrientation: item.vertical ? 'mixed' : 'upright',
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

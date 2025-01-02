import React from 'react';
import { Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { fluorescentColors } from '../Sketch';
import { getContrastRatio } from '../../utils';
import { shadeColor } from '../../utils/colors';

const contentData = [
  { text: "Beauty consists of its own passing, just as we reach for it.", author: "Muriel Barbery, The Elegance of the Hedgehog", colorClass: "yellow" },
  { text: "Going nowhere is not about turning your back on the world; it's about stepping away now and then so that you can see it more clearly and love it more deeply.", author: "Pico Iyer, The Art of Stillness: Adventures in Going Nowhere", colorClass: "cyan" },
  { text: "", colorClass: "cyan" },
  { text: "There are few misfortunes in this world that you cannot turn into a blessing.", author: "Isabel Wilkerson, The Warmth of Other Suns", colorClass: "red" },
  { text: "What's the world for if you can't make it up the way you want it?", author: "Toni Morrison, Jazz", colorClass: "blue", vertical: true },
  { text: "", colorClass: "blue" },
  { text: "Rivers are mirrors of the landscapes they traverse.", author: "Fred Pearce, When the River Runs Dry", colorClass: "yellow" },
  { text: "", colorClass: "orange" },
  { text: "", colorClass: "green" },
  { text: "The ultimate puzzle-solving challenge", colorClass: "blue" },
  { text: "", colorClass: "blue" },
  { text: "", colorClass: "yellow" },
  { text: "", colorClass: "blue" },
  { text: "", colorClass: "blue" },
  { text: "To celebrate music is to celebrate life itself—its joys, struggles, and the love that binds us together.", colorClass: "green", vertical: true },
  { text: "", colorClass: "red" },
  { text: "", colorClass: "blue" },
  { text: "", colorClass: "green" },
  { text: "", colorClass: "green" },
  { text: "Each note carries a story; each rhythm, a heartbeat—music is the purest form of connection.", author: "Maeve Sullivan, Harmony and Humanity", colorClass: "yellow" },
  { text: "", colorClass: "orange" },
  { text: "", colorClass: "red" },
  { text: "", colorClass: "red" },
  { text: "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.", author: "Albert Einstein, The World As I See It", colorClass: "green" },
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

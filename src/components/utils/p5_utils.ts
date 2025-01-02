import { fluorescentColors } from "@co-fun/ui";

// @ts-ignore
export const generateColorPalettes = (p5) => {
    let newPalettes = [];
  
    // Generate vibrant and organic monochrome palettes
    for (let i = 0; i < 10; i++) {
      let baseColor = p5.color(p5.random(50, 180), p5.random(80, 160), p5.random(50, 140));
      let palette = [
        baseColor,
        p5.lerpColor(baseColor, p5.color(255, 245, 230), 0.4),
        p5.lerpColor(baseColor, p5.color(20, 20, 20), 0.3),
        p5.lerpColor(baseColor, p5.color(240, 180, 70), 0.6),
        p5.lerpColor(baseColor, p5.color(250, 250, 240), 0.85)
      ];
      newPalettes.push(palette);
    }
  
    // Generate complementary and contrast palettes with vibrant and organic tones
    for (let i = 0; i < 10; i++) {
      let baseColor1 = p5.color(p5.random(50, 200), p5.random(50, 180), p5.random(50, 150));
      let accentColor = p5.color(255 - p5.red(baseColor1), 255 - p5.green(baseColor1), p5.random(100, 255));
      newPalettes.push([
        baseColor1,
        accentColor,
        p5.lerpColor(baseColor1, accentColor, 0.5),
        p5.lerpColor(accentColor, p5.color(255, 240, 200), 0.3)
      ]);
    }
  
    // Adding 300 more vibrant colors to enhance probability
    for (let i = 0; i < 300; i++) {
      fluorescentColors.push(
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
      );
    }
  
    // Generating final fluorescent palettes with extended vibrant colors
    for (let i = 0; i < fluorescentColors.length - 5; i += 6) {
      newPalettes.push([
        p5.color(fluorescentColors[i]),
        p5.color(fluorescentColors[i + 1]),
        p5.color(fluorescentColors[i + 2]),
        p5.color(fluorescentColors[i + 3]),
        p5.color(fluorescentColors[i + 4]),
        p5.color(fluorescentColors[i + 5])
      ]);
    }
  
    return newPalettes;
  };
  
export const shadeColor = (color: string, percent: number): string => {
  if (!/^#([0-9A-F]{6})$/i.test(color)) {
    throw new Error("Invalid color format. Use a valid hex color (e.g., #RRGGBB).");
  }

  let R: number = parseInt(color.substring(1, 3), 16);
  let G: number = parseInt(color.substring(3, 5), 16);
  let B: number = parseInt(color.substring(5, 7), 16);

  R = Math.min(255, Math.round(R * (1 + percent / 100)));
  G = Math.min(255, Math.round(G * (1 + percent / 100)));
  B = Math.min(255, Math.round(B * (1 + percent / 100)));

  const RR: string = R.toString(16).padStart(2, "0").toUpperCase();
  const GG: string = G.toString(16).padStart(2, "0").toUpperCase();
  const BB: string = B.toString(16).padStart(2, "0").toUpperCase();

  return `#${RR}${GG}${BB}`;
};

export const getLuminance = (hex: string): number => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
  
    const sRGB = [r, g, b].map((value) => {
      value /= 255;
      return value <= 0.03928
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
    });
  
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  };

  export const getContrastRatio = (
    foreground: string,
    background: string
  ): number => {
    const lum1 = getLuminance(foreground);
    const lum2 = getLuminance(background);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  };
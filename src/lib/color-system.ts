/**
 * Luxury Color System Utility
 * Handles color mixing, accessibility compliance, and palette generation.
 */

export const LUXURY_PALETTE = {
  deepWine: "#4A0013",
  burgundy: "#6A001B",
  richCrimson: "#8B1026",
  oxblood: "#2A0008",
  champagne: "#D6B38A",
  luxuryGold: "#C7A46C",
  ivory: "#F4E7DF",
  softNude: "#F4E7DF",
  beige: "#D6B38A",
  velvetRed: "#4A0013",
  garnetGlow: "#8B1026",
  mutedGold: "#C7A46C",
};

/**
 * Calculates relative luminance of a hex color
 */
function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * Calculates contrast ratio between two hex colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Checks if color pairing meets WCAG 2.1 AA compliance (4.5:1 for normal text)
 */
export function isAACompliant(foreground: string, background: string): boolean {
  return getContrastRatio(foreground, background) >= 4.5;
}

/**
 * Converts hex to RGB
 */
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Mixes two colors together by a weight (0 to 1)
 */
export function mixColors(color1: string, color2: string, weight: number = 0.5): string {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  if (!rgb1 || !rgb2) return color1;

  const r = Math.round(rgb1.r * (1 - weight) + rgb2.r * weight);
  const g = Math.round(rgb1.g * (1 - weight) + rgb2.g * weight);
  const b = Math.round(rgb1.b * (1 - weight) + rgb2.b * weight);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * Generates a gradient string based on the palette
 */
export function generateGradient(color1: keyof typeof LUXURY_PALETTE, color2: keyof typeof LUXURY_PALETTE, type: 'linear' | 'radial' = 'linear'): string {
  const c1 = LUXURY_PALETTE[color1];
  const c2 = LUXURY_PALETTE[color2];
  return type === 'linear' 
    ? `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`
    : `radial-gradient(circle, ${c1} 0%, ${c2} 100%)`;
}

/**
 * Exports the system as CSS variables
 */
export function exportToCSSVariables(): string {
  return `:root {\n${Object.entries(LUXURY_PALETTE)
    .map(([name, value]) => `  --color-${name.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
    .join('\n')}\n}`;
}

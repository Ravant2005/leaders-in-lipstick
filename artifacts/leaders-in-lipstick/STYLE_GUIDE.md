# Style Guide: Cherry Gold & Off-White Palette

This document outlines the professional and elegant color palette implemented for the **Leaders in Lipstick** website, designed for the Indian community of women leaders.

## Core Color Specifications

### 1. Primary Accent: Cherry Gold
- **Hex Code**: `#D4AF37` (Metallic Gold variant)
- **HSL**: `45 65% 52%`
- **Usage**: Primary buttons, active links, icons, and brand-defining accents.
- **Role**: Represents "Shakti" (power), luxury, and leadership.

### 2. Base Color: Sophisticated Off-White
- **Hex Code**: `#FAFAF8` (Warm Cream variant)
- **HSL**: `45 30% 98%`
- **Usage**: Page backgrounds, cards, popovers, and large surface areas.
- **Role**: Provides a clean, elegant, and non-sterile foundation that complements the gold.

### 3. Typography & Contrast: Warm Charcoal
- **Hex Code**: `#1A1918`
- **HSL**: `45 10% 10%`
- **Usage**: Body text, headings, and high-contrast foreground elements.
- **Role**: Ensures maximum readability and professional weight.

### 4. Support Neutrals: Soft Gold Grays
- **Borders/Inputs**: `hsl(45 10% 90%)` (#E6E4E2)
- **Muted Text**: `hsl(45 5% 45%)` (#76736F)

---

## Color Ratios (70/25/5 Rule)

- **70% Off-White**: Backgrounds (`--background`), Card backgrounds (`--card`), Popover surfaces.
- **25% Cherry Gold**: Primary elements (`--primary`), Rings (`--ring`), Active states (`--accent`).
- **5% Neutral Grays**: Borders (`--border`), Inputs (`--input`), Muted details.

---

## Accessibility Standards

- **Normal Text**: Main body text (#1A1918) on Off-White (#FAFAF8) achieves a contrast ratio of **~18:1**, far exceeding the WCAG AAA requirement (7:1).
- **Text on Gold**: Primary button text uses the Warm Charcoal (#1A1918) foreground on Gold (#D4AF37), achieving a contrast ratio of **~7:1**, meeting WCAG AAA standards.
- **Large Text**: Headings achieve similar high-contrast ratios.

---

## Implementation Notes

- **CSS Variables**: All colors are defined as HSL variables in `src/index.css`.
- **Tailwind Integration**: The theme is seamlessly integrated into Tailwind's utility classes (`bg-primary`, `text-foreground`, etc.).
- **Hover States**: Interactive elements use a slight variation of the gold or elevated shadows for feedback without breaking the palette.

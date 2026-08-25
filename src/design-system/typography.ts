/**
 * ===========================================
 * 🔤 TYPOGRAPHY - تایپوگرافی ماژولار
 * ===========================================
 */

export const typography = {
  // Font Families
  fontFamily: {
    sans: "'Vazirmatn', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
    display: "'Vazirmatn', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  // Font Weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Font Sizes - Modular Scale (ratio: 1.25)
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],     // 14px
    base: ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],            // 16px
    lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],          // 18px
    xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],     // 20px
    '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],   // 24px
    '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],  // 36px
    '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],    // 48px
    '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],  // 60px
    '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],  // 72px
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.02em',
    normal: '0',
    wide: '0.01em',
    wider: '0.02em',
    widest: '0.04em',
  },
} as const;

export type Typography = typeof typography;
export type FontSizeKey = keyof typeof typography.fontSize;
export type FontWeightKey = keyof typeof typography.fontWeight;
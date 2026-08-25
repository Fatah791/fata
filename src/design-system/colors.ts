/**
 * ===========================================
 * 🎨 DESIGN SYSTEM TOKENS - "بهترینها"
 * ===========================================
 * سیستم طراحی یکپارچه، مدرن و کاملاً Dark-First
 * بر پایه: 8px grid، مقیاستایپوگرافی ماژولار، رنگهای معنایی
 * ===========================================
 */

// ──────────────────────────────────────────
// 🎯 COLOR PALETTE - پالت رنگی معنایی
// ──────────────────────────────────────────

export const colors = {
  // Brand Colors - برند (Indigo → Violet → Rose)
  brand: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',  // Primary Brand
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },

  // Accent - Violet → Fuchsia
  accent: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',  // Secondary Accent
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },

  // Accent Tertiary - Rose/Pink
  accentTertiary: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',  // Tertiary Accent
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519',
  },

  // Semantic Colors - رنگهای معنایی (Dark Theme Default)
  semantic: {
    // Backgrounds
    bg: {
      primary: '#0a0a0f',
      secondary: '#11111a',
      tertiary: '#1a1a25',
      quaternary: '#22222f',
      overlay: 'rgba(0, 0, 0, 0.6)',
      glass: 'rgba(255, 255, 255, 0.02)',
      glassStrong: 'rgba(255, 255, 255, 0.05)',
    },

    // Text
    text: {
      primary: '#f8f8fc',
      secondary: '#b8b8cc',
      tertiary: '#888899',
      muted: '#6a6a7a',
      inverse: '#0a0a0f',
      brand: '#a5b4fc',
      accent: '#d8b4fe',
      success: '#86efac',
      warning: '#fde047',
      error: '#fca5a5',
    },

    // Borders
    border: {
      primary: 'rgba(255, 255, 255, 0.06)',
      secondary: 'rgba(255, 255, 255, 0.1)',
      accent: 'rgba(99, 102, 241, 0.3)',
      accentHover: 'rgba(99, 102, 241, 0.5)',
      focus: '#6366f1',
      error: '#ef4444',
    },

    // Interactive
    interactive: {
      primary: '#6366f1',
      primaryHover: '#4f46e5',
      primaryActive: '#4338ca',
      secondary: '#1a1a25',
      secondaryHover: '#22222f',
      ghost: 'transparent',
      ghostHover: 'rgba(255, 255, 255, 0.04)',
    },

    // Status
    status: {
      success: '#22c55e',
      successBg: 'rgba(34, 197, 94, 0.1)',
      warning: '#eab308',
      warningBg: 'rgba(234, 179, 8, 0.1)',
      error: '#ef4444',
      errorBg: 'rgba(239, 68, 68, 0.1)',
      info: '#3b82f6',
      infoBg: 'rgba(59, 130, 246, 0.1)',
    },

    // Gradients
    gradients: {
      brand: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
      brandSubtle: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.08) 100%)',
      mesh: 'radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 40% 60%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
      card: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      hero: 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
    },

    // Shadows
    shadows: {
      xs: '0 1px 2px rgba(0, 0, 0, 0.3)',
      sm: '0 2px 8px rgba(0, 0, 0, 0.35)',
      md: '0 4px 20px rgba(0, 0, 0, 0.4)',
      lg: '0 8px 40px rgba(0, 0, 0, 0.5)',
      xl: '0 16px 64px rgba(0, 0, 0, 0.55)',
      glow: '0 0 40px rgba(99, 102, 241, 0.25)',
      glowStrong: '0 0 60px rgba(99, 102, 241, 0.35)',
      inner: 'inset 0 1px 0 rgba(255, 255, 255, 0.03)',
      card: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03)',
      cardHover: '0 8px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.15)',
    },
  },

  // Light Theme Overrides (for .light class)
  light: {
    bg: {
      primary: '#f8f8fc',
      secondary: '#ffffff',
      tertiary: '#f0f0f5',
      quaternary: '#e8e8ef',
      overlay: 'rgba(0, 0, 0, 0.4)',
      glass: 'rgba(0, 0, 0, 0.02)',
      glassStrong: 'rgba(0, 0, 0, 0.04)',
    },
    text: {
      primary: '#0a0a0f',
      secondary: '#3a3a4a',
      tertiary: '#6a6a7a',
      muted: '#8a8a9a',
      inverse: '#f8f8fc',
      brand: '#4338ca',
      accent: '#7e22ce',
      success: '#16a34a',
      warning: '#ca8a04',
      error: '#dc2626',
    },
    border: {
      primary: 'rgba(0, 0, 0, 0.05)',
      secondary: 'rgba(0, 0, 0, 0.08)',
      accent: 'rgba(99, 102, 241, 0.4)',
      accentHover: 'rgba(99, 102, 241, 0.6)',
      focus: '#6366f1',
      error: '#ef4444',
    },
    interactive: {
      primary: '#6366f1',
      primaryHover: '#4f46e5',
      primaryActive: '#4338ca',
      secondary: '#f0f0f5',
      secondaryHover: '#e8e8ef',
      ghost: 'transparent',
      ghostHover: 'rgba(0, 0, 0, 0.03)',
    },
    shadows: {
      xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
      sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
      md: '0 4px 20px rgba(0, 0, 0, 0.1)',
      lg: '0 8px 40px rgba(0, 0, 0, 0.12)',
      xl: '0 16px 64px rgba(0, 0, 0, 0.15)',
      glow: '0 0 40px rgba(99, 102, 241, 0.2)',
      glowStrong: '0 0 60px rgba(99, 102, 241, 0.25)',
      inner: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      card: '0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)',
      cardHover: '0 8px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(99, 102, 241, 0.1)',
    },
  },
} as const;
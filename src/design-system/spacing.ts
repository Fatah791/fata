/**
 * ===========================================
 * 📐 SPACING SYSTEM - سیستم فاصلهگذاری (8px Base)
 * ===========================================
 */

export const spacing = {
  0: '0',
  px: '1px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',     // Base unit
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',    // 2 * base
  5: '20px',
  6: '24px',    // 3 * base
  7: '28px',
  8: '32px',    // 4 * base
  9: '36px',
  10: '40px',   // 5 * base
  11: '44px',
  12: '48px',   // 6 * base
  14: '56px',
  16: '64px',   // 8 * base
  20: '80px',   // 10 * base
  24: '96px',   // 12 * base
  28: '112px',
  32: '128px',  // 16 * base
} as const;

export type Spacing = typeof spacing;
export type SpacingKey = keyof Spacing;
/**
 * ===========================================
 * 📱 BREAKPOINTS - نقاط شکست واکنشگرا
 * ===========================================
 */

export const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Media query helpers
export const mediaQuery = {
  // Max-width (mobile-first down)
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
  '2xl': `@media (max-width: ${breakpoints['2xl']})`,
  // Min-width (mobile-first up)
  minSm: `@media (min-width: ${breakpoints.sm})`,
  minMd: `@media (min-width: ${breakpoints.md})`,
  minLg: `@media (min-width: ${breakpoints.lg})`,
  minXl: `@media (min-width: ${breakpoints.xl})`,
  min2xl: `@media (min-width: ${breakpoints['2xl']})`,
} as const;

export type Breakpoints = typeof breakpoints;
export type BreakpointKey = keyof Breakpoints;
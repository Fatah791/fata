/**
 * ===========================================
 * 📦 CONTAINER WIDTHS
 * ===========================================
 */

export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
  full: '100%',
} as const;

export type Container = typeof container;
export type ContainerKey = keyof Container;
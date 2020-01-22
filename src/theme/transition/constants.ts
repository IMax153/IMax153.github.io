import { ValuesOf } from '../../utils/types';

export const TRANSITION_DURATION = {
  SLOW: 'slow',
  MEDIUM: 'medium',
  FAST: 'fast',
} as const;

export type TransitionDuration = ValuesOf<typeof TRANSITION_DURATION>;

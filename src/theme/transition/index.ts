import { WithTheme } from '../index';
import { TRANSITION_DURATION, TransitionDuration } from './constants';

export const transition = (
  properties: string[],
  duration: TransitionDuration,
  timingFunction = 'ease-in-out',
) => ({ theme }: WithTheme) => {
  const tokens = {
    [TRANSITION_DURATION.SLOW]: theme.transition.duration.slow,
    [TRANSITION_DURATION.MEDIUM]: theme.transition.duration.medium,
    [TRANSITION_DURATION.FAST]: theme.transition.duration.fast,
  };

  return `
    ${properties.map(property => `${property} ${tokens[duration]} ${timingFunction}`).join(',')};
  `;
};

import styled, { css } from 'styled-components';

import { mediaQuery } from '../../theme/mediaQuery';
import { transition } from '../../theme/transition';

interface Props {
  shown: boolean;
}

export const StyledSidebar = styled.aside<Props>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  height: 100%;
  width: 80%;
  background-color: #ffffff;
  overflow-y: auto;
  transform: translate3d(${({ shown }) => (shown ? '0, 0, 0' : '100% , 0, 0')});
  transition: ${transition(['transform'], 'medium')};
  z-index: ${({ theme }) => theme.zIndex.overlay};

  ${mediaQuery.largeMobile(css<Props>`
    max-width: 275px;
    transform: translate3d(${({ shown }) => (shown ? '0, 0, 0' : '275px, isPrefixed, 0, 0')});
  `)};
`;

export const StyledSidebarContent = styled.div`
  padding: 1rem;

  a {
    color: inherit;
    transition: ${transition(['color'], 'fast')};

    &:hover {
      color: #663399;
      text-decoration: underline;
    }
  }
`;

export const StyledSidebarOverlay = styled.div<Props>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  visibility: ${({ shown }) => (shown ? 'visible' : 'hidden')};
  height: 100%;
  width: 100%;
  background-color: ${({ shown }) => (shown ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
  outline: none;
  overflow-x: hidden;
  -webkit-overflow-scrolling: auto;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  transition: ${transition(['background-color', 'visibility'], 'medium')};

  ${mediaQuery.largeMobile(css`
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing.xxl};
  `)};
`;

import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { mediaBreakpointUp, mediaBreakpointDown } from '../../mixins/breakpoint';
import { fp } from '../../mixins/common';
import LogoSVG from '../../assets/images/logo/wink-logo.svg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  font-size: 0;
  line-height: 0;
  z-index: 9999;

  ${props => props.blur
    && css`
      z-index: 29;
    `};

  ${mediaBreakpointUp('lg')`
    transform-origin: center bottom;
    transform: translate3d(0,-100px,0);

    ${props => props.loaded
      && css`
        transform: scale(1) translate3d(0, 0, 0);
        transition-property: transform;
        transition-duration: 1s;
        transition-timing-function: var(--easeOutCirc);
        transition-delay: 0.7s;
      `};
  `};
`;

const HeaderInnerBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  ${mediaBreakpointUp('lg')`
    align-items: flex-end;
    padding-left: ${(30 / 1380) * 100}%;
    padding-right: ${(30 / 1380) * 100}%;
    ${fp('height', 70, 94, 992, 1150)};
  `};

  @media (min-width: 1380px) {
    padding-left: 65px;
    padding-right: 65px;
  }

  ${mediaBreakpointDown('md')`
    height: 68px;
    ${fp('padding-right', 20, 40)};
    ${fp('padding-left', 20, 40)};
  `};

  ${props => props.hide
    && css`
      align-items: center !important;
      background-color: rgba(236, 235, 234, 0.68);
      height: 70px !important;

      ${mediaBreakpointDown('md')`
      height: 68px !important;
    `};
    `};
`;

const Logo = styled(LogoSVG)`
  width: 100%;
`;

const LogoLink = styled(Link)`
  display: block;

  ${props => props.hide
    && css`
      width: 105px !important;

      ${mediaBreakpointDown('md')`
        width: 97px !important;
      `};
    `};

  ${mediaBreakpointUp('lg')`
    ${fp('width', 105, 160, 992, 1150)};
  `};

  ${mediaBreakpointDown('md')`
    width: 97px;
  `};
`;

const LogoBlock = styled.div`
  position: relative;
  display: inline-block;

  ${mediaBreakpointDown('md')`
    margin-top: -9px;
  `};

  ${props => props.hide
    && css`
      margin-top: -9px;
    `};
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0;
  line-height: 0;
`;

const MenuListItem = styled.li`
  display: inline-block;
  text-align: center;
  position: relative;

  ${mediaBreakpointUp('lg')`
    ${fp('margin-right', 15, 30, 992, 1150)};
  `};

  &:last-child {
    margin-right: 0;
  }
`;

const MenuLink = styled.a`
  position: relative;
  display: inline-block;
  color: #4c4c4c;
  font-family: var(--font-lato-bold);
  font-weight: normal;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.11em;
  white-space: nowrap;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:after {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    margin: auto;
    background-color: var(--brand);
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &.active {
    color: var(--brand);
  }
`;

const MenuNav = styled.nav`
  display: inline-block;

  ${mediaBreakpointDown('md')`
    display: none;
  `};
`;

export {
  HeaderContainer,
  HeaderInnerBlock,
  LogoBlock,
  LogoLink,
  Logo,
  MenuNav,
  MenuList,
  MenuListItem,
  MenuLink,
};

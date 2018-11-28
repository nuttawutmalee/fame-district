import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  HeaderInnerBlock,
  LogoBlock,
  LogoLink,
  Logo,
  MenuNav,
  MenuList,
  MenuListItem,
  MenuLink,
} from './header-styled';
// import { mapLanguage } from '../../utils/tools';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
    this.state = {
      scrollY: 0,
    };
  }

  componentDidMount() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }

  onScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  // eslint-disable-next-line
  onMenuItemClicked(id) {
    return (e) => {
      e.preventDefault();
      const target = window.document.getElementById(id);

      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      }
    };
  }

  render() {
    const { loaded, menuItems = [] } = this.props;
    const { scrollY } = this.state;
    const hide = scrollY > 100;

    return (
      <HeaderContainer loaded={loaded}>
        <HeaderInnerBlock hide={hide}>
          <LogoBlock hide={hide}>
            <LogoLink to="/" hide={hide}>
              <Logo />
            </LogoLink>
          </LogoBlock>
          <MenuNav>
            <MenuList>
              {menuItems.map(
                ({ id, title }) => typeof title !== 'undefined' && (
                <MenuListItem key={id}>
                  <MenuLink href="#" onClick={this.onMenuItemClicked(id)}>
                    {String(title).toLocaleUpperCase()}
                  </MenuLink>
                </MenuListItem>
                ),
              )}
            </MenuList>
          </MenuNav>
          <div className="h-social">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/WinkHotels/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/winkhotels" target="_blank" rel="noopener noreferrer">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/winkhotels/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="mailto:chi.l.dang@indochinavanguard.com">
                  <i className="icon-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </HeaderInnerBlock>
      </HeaderContainer>
    );
  }
}

Header.defaultProps = {
  menuItems: [],
};

Header.propTypes = {
  loaded: PropTypes.bool.isRequired,
  menuItems: PropTypes.array,
};

export default Header;

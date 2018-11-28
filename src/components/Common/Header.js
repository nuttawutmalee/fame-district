import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, HeaderInnerBlock, LogoBlock, LogoLink, Logo } from './header-styled';
// import { mapLanguage } from '../../utils/tools';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
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

  render() {
    const { loaded } = this.props;
    const { scrollY } = this.state;
    const hide = scrollY > 100;

    console.log(hide);

    return (
      <HeaderContainer loaded={loaded}>
        <HeaderInnerBlock hide={hide}>
          <LogoBlock hide={hide}>
            <LogoLink to="/" hide={hide}>
              <Logo />
            </LogoLink>
          </LogoBlock>
          {/* <nav id="main-menu">
          <ul>
            <li>
              <a href="#" b-scroll-to="#concept">
                Concept
              </a>
            </li>
            <li>
              <a href="#" b-scroll-to="#the-first-wink">
                The First wink
              </a>
            </li>
            <li>
              <a href="#" b-scroll-to="#hotels">
                Hotels
              </a>
            </li>
            <li>
              <a href="#" b-scroll-to="#residences">
                Residences
              </a>
            </li>
            <li>
              <a href="#" b-scroll-to="#experiences">
                Experiences
              </a>
            </li>
            <li>
              <a href="#" b-scroll-to="#about">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="h-social">
          <ul>
            <li>
              <a href="https://www.facebook.com/WinkHotels/" target="_blank">
                <i className="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/winkhotels" target="_blank">
                <i className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/winkhotels/" target="_blank">
                <i className="icon-instagram" />
              </a>
            </li>
            <li>
              <a href="mailto:chi.l.dang@indochinavanguard.com">
                <i className="icon-envelope" />
              </a>
            </li>
          </ul>
        </div> */}
        </HeaderInnerBlock>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default Header;

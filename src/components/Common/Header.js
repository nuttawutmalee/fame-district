import React from 'react';
import { HeaderContainer } from './header-styled';

const Header = props => <HeaderContainer {...props}>{props.children}</HeaderContainer>;

export default Header;

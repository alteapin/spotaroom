import React, { Component } from 'react';
import './Header.scss';
import logo from '../../logo/logo.png'


class Header extends Component {

    render() {
        return (
            <div className="header_container">
                <img className="header_logo"
                src={logo} alt="spotaroom" />
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import './Header.scss';
import logo from '../../logo/logo.png'


class Header extends Component {

    render() {
        return (
            <div className="header_container">
                    <img className="header_logo"
                    src={logo} alt="spotaroom" />

                <div className="header-links_container">
                        <a className="header_links"
                        href="https://www.spotahome.com/es">The company</a>

                    <span className="links-divider"> - </span>

                        <a className="header_links"
                        href="https://www.spotahome.com/es/como-funciona">How we work</a>

                    <span className="links-divider"> - </span>
                    
                        <a className="header_links"
                        href="https://www.spotahome.com/es/contacto">Contact us</a>
                </div>

            </div>
        );
    }
}

export default Header;
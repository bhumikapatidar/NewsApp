import React from 'react';
import './Navbar.css';
import HamburgerDrawer from './HamburgerDrawer';

const Navbar = ({setCategory}) => {
    return (
        <div className="nav">
            <div className="menu">
                <HamburgerDrawer setCategory={setCategory} />
            </div>

            {/* <img
                style={{ cursor: "pointer" }}
                src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                height="80%"
                alt="logo"
            /> */}
            <h1 className='app-name'>
                NEWS APP
            </h1>
        </div>
    )
}

export default Navbar
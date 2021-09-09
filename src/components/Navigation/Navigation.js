import React from 'react';
import menu from '../../assets/icons/menu_black_24dp.svg'
import './navigation.scss';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';


const Navigation = (props) => {
    return (
        <div className="nav-bar">
            <img src={menu} alt="menu icon" onClick={props.navOpen} className="nav-bar__menu" />
            <Drawer anchor="left" open={props.stateNav} onClose={props.navClose} classes={{
                paperAnchorLeft: 'drawer'
            }}>
                <div className="link-box">
                    <Link to="/" className="links" onClick={props.navClose}>
                        <h2 className="link-tags">Home</h2>
                    </Link>
                    <Link to="/about" className="links" onClick={props.navClose}>
                        <h2 className="link-tags">About</h2>
                    </Link>
                    <Link to="/projects" className="links" onClick={props.navClose}>
                        <h2 className="link-tags">Projects</h2>
                    </Link>
                </div>
            </Drawer>
        </div>
    )
}

export default Navigation;

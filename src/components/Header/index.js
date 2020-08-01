import React, { memo } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import Logo from '../Logo';
import Search from '../Search';

import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <MenuIcon />
                <Logo />
            </div>

            <div className="header__center">
                <Search />
            </div>

            <div className="header__right">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </div>
        </header>
    );
}

export default memo(Header);

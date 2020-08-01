import React from 'react';
import classNames from 'classnames';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import './sidebar.scss';

function Row({ title, icon: Icon, selected }) {
    return (
        <div className={classNames('sidebar__row', 'row', { selected })}>
            <Icon className={classNames('row__icon', { selected })} />
            <h2 className="row__title">{title}</h2>
        </div>
    );
}

function Sidebar() {
    return (
        <aside className="sidebar">
            <Row title="Home" icon={HomeIcon} selected />
            <Row title="Trending" icon={WhatshotIcon} />
            <Row title="Subscriptions" icon={SubscriptionsIcon} />
            <hr />
            <Row title="Library" icon={VideoLibraryIcon} />
            <Row title="History" icon={HistoryIcon} />
            <Row title="Your videos" icon={OndemandVideoIcon} />
            <Row title="Watch Later" icon={WatchLaterIcon} />
            <Row title="Liked videos" icon={ThumbUpAltOutlinedIcon} />
            <Row title="Show more" icon={ExpandMoreOutlinedIcon} />
            <hr />
        </aside>
    );
}

export default Sidebar;

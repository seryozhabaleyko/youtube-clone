import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './videoCard.scss';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <article className="video-card">
            <img className="video-card__thumbnail" src={image} alt="" />
            <div className="video-card__info">
                <Avatar className="video-card__avatar" src={channelImage} alt={channel} />
                <div className="video-card__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default VideoCard;

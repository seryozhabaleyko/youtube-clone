import React from 'react';

import './VideoRow.scss';

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <article className="video-row">
            <img src={image} alt={channel} />
            <div className="video-row__text">
                <h3>{title}</h3>
                <p className="video-row__headline">
                    {channel} • {views} • {timestamp}
                </p>
                <p className="video-row__description">{description}</p>
            </div>
        </article>
    );
}

export default VideoRow;

import React from 'react';
import { Avatar } from '@material-ui/core';
import { CheckCircleOutlineOutlined as VerifiedIcon } from '@material-ui/icons';

import './channelRow.scss';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <article className="channel-row">
            <Avatar className="channel-row__logo" src={image} alt={channel} />
            <div className="channel-row__text">
                <h4>
                    {channel} {verified && <VerifiedIcon />}
                </h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </article>
    );
}

export default ChannelRow;

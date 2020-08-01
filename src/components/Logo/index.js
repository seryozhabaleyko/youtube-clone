import React, { memo } from 'react';

import './logo.scss';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
            <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="YouTube"
            />
        </Link>
    );
}

export default memo(Logo);

import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import './search.scss';

function Search() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="search">
            <input
                type="search"
                placeholder="Search"
                value={inputSearch}
                onChange={(event) => setInputSearch(event.target.value)}
            />
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="search__button-submit" />
            </Link>
        </div>
    );
}

export default Search;


import React from 'react';

const Searchbar = ({ handleSearchCrypto }) => {


    const handleSearch = e => {
        handleSearchCrypto(e.target.value)
    }

    return (
        <input className="float-right mr-5 my-2 rounded search-bar"
            type="text"
            placeholder="Search"
            style={{ height: '25px' }}
            onChange={handleSearch}>
            
        </input>
    );
}

export default Searchbar;
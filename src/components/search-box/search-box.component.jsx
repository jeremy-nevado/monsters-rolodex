import React from 'react';

import './searchbox.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input type="search" placeholder={placeholder} onChange={handleChange} />
);

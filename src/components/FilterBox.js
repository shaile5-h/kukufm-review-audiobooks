import React from 'react';

function FilterBox({ onFilterChange }) {
    return (
        <div>
            <h2>Filters</h2>
            <div>
                <label htmlFor="genre">Genre:</label>
                <input
                    id="genre"
                    type="text"
                    onChange={e => onFilterChange('genre', e.target.value)}
                    placeholder="Genre"
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input
                    id="author"
                    type="text"
                    onChange={e => onFilterChange('author', e.target.value)}
                    placeholder="Author"
                />
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input
                    id="rating"
                    type="number"
                    onChange={e => onFilterChange('rating', e.target.value)}
                    placeholder="Rating"
                />
            </div>
        </div>
    );
}

export default FilterBox;

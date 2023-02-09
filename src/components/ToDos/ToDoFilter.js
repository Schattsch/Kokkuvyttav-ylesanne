import React, { useState } from 'react';

import './ToDoFilter.css';

const ToDoFilter = (props) => {
    const [selectedValue, setSelectedValue] = useState('all');
    const handleFilterClick = () => {
        const nextValue = selectedValue === 'all' ? 'high' :
            selectedValue === 'high' ? 'medium' :
                selectedValue === 'medium' ? 'low' : 'all';
        setSelectedValue(nextValue);
        props.onChangeFilter(nextValue);
    };

    return (
        <div className="todos-filter">
            <div className="todos-filter__control">
                <label>Filter by priority</label>
                <button className="todos-filter__button" onClick={handleFilterClick}>
                    {selectedValue}
                </button>
            </div>
        </div>
    );
};

export default ToDoFilter;
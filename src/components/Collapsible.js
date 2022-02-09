import React from 'react';
import useCollapse from 'react-collapsed';
import './Collapsible.css';

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            A closed social media application designed entirely in Django. If you'd like to test the search, search for the word 'test'. If you'd like to test user functionality with an already populated message board, sign in with username: testuser1, password: berenstein
            </div>
        </div>
    </div>
    );
}

export default Collapsible
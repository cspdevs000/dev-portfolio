import React from 'react';
import useCollapse from 'react-collapsed';
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import './Collapsible.css';

function CollapsibleOne() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? ' ' : 'Info'} {isExpanded ? <BiUpArrow /> : <BiDownArrow />}
        </div>
        <div className='content-container' {...getCollapseProps()}>
            <div className="collapsible-content">
            A closed social media application designed entirely in Django. If you'd like to test the search, search for the word 'test'. If you'd like to test user functionality with an already populated message board, sign in with username: testuser1, password: berenstein
            </div>
        </div>
    </div>
    );
}

function CollapsibleTwo() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? ' ' : 'Info'} {isExpanded ? <BiUpArrow /> : <BiDownArrow />}
        </div>
        <div {...getCollapseProps()}>
            <div className="collapsible-content">
            A MERN application for getting COVID data by county. User can update vaccine card photo and set the county they live in for easy, automatic access to relevant information. Please forgive Heroku for the slow initial loading time of the landing page.            </div>
        </div>
    </div>
    );
}

function CollapsibleThree() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? ' ' : 'Info'} {isExpanded ? <BiUpArrow /> : <BiDownArrow />}
        </div>
        <div {...getCollapseProps()}>
            <div className="collapsible-content">
            An EJS / express application for archiving user's national park visits. User can keep a list of parks they've visited, view park info and add 'memory' posts.
            </div>
        </div>
    </div>
    );
}

function CollapsibleFour() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? ' ' : 'Info'} {isExpanded ? <BiUpArrow /> : <BiDownArrow />}
        </div>
        <div {...getCollapseProps()}>
            <div className="collapsible-content">
            My first development project, a cheeky and simple HTML browser game. Use a & d keys to move the character to either side of the tower.            </div>
        </div>
    </div>
    );
}


export { CollapsibleOne, CollapsibleTwo, CollapsibleThree, CollapsibleFour }
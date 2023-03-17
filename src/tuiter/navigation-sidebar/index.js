import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    console.log(paths);
    const active = paths.length === 2 || paths[2] === ''? 'explore' : paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-align-top"></i>
                <span className="d-none d-xl-inline"> Tuiter</span>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house"></i>
                <span className="d-none d-xl-inline"> Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-search"></i>
                <span className="d-none d-xl-inline"> Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-braces"></i>
                <span className="d-none d-xl-inline"> Labs</span>
            </Link>
            <Link className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell"></i>
                <span className="d-none d-xl-inline"> Notifications</span>
            </Link>
            <Link className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope"></i>
                <span className="d-none d-xl-inline"> Messages</span>
            </Link>
            <Link className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark"></i>
                <span className="d-none d-xl-inline"> Bookmarks</span>
            </Link>
            <Link className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-task"></i>
                <span className="d-none d-xl-inline"> Lists</span>
            </Link>
            <Link className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person"></i>
                <span className="d-none d-xl-inline"> Profile</span>
            </Link>
            <Link className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                <span className="d-none d-xl-inline"> More</span>
            </Link>
        </div>
    );
};

export default NavigationSidebar;
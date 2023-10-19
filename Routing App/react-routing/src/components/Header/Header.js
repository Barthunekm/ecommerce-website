import React from 'react';
import "./header.scss"
import { Link ,NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div>
                <NavLink to='/'> Home</NavLink>
                <NavLink to='/Product'>Products</NavLink>
            </div>
            <div>
                <NavLink to=''> Sign In</NavLink>
                <NavLink to=''>Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Header;
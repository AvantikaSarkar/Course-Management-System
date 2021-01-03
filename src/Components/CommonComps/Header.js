import React from 'react'
import {NavLink} from 'react-router-dom'


function Header(){

    const activeStyle = {color : "orange"};

    return(
        <nav >
            <h3>
            <NavLink activeStyle={activeStyle} to='/' exact > Home </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to='/courses' > Courses </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to='/about' > About Us </NavLink>
            </h3>
            <hr style={{
                color: '#000000',
                backgroundColor: 'gray',
                height: .2
            }}/>
        </nav>
    )
}

export default Header
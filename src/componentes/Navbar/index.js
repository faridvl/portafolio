import React, { useState } from 'react'
import './styles.scss'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
export const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <>
            <div className='navbar'>
                <h2>Portfolio {/* <span>Farid Villacis Leiva</span> */} </h2>
                <div className={`navbar__links ${active ? 'active' : ''}`} >
                    <a href='/'> Description</a>
                    <a href='/'> Academic</a>
                    <a href='/'> Skills</a>
                    <a href='/'> Projects</a>
                    <a href='/'> Contact</a>

                </div>
                <div className='navbar__burger-icon'>
                    <IconButton onClick={() => { handleClick() }}>
                        <MenuIcon sx={{ color: '#fff' }} />
                    </IconButton>
                </div>

            </div>
        </>
    )
}

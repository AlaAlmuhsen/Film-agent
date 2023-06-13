import React from 'react'
import vector from '../images/vector.png'
import { Link } from 'react-router-dom'
import  Button  from '../components/Button'
function Header(){
    return (
        <header className='container '>
            <div className='logo'>
                <img src={vector} alt="Filmagnet Logo" />
                <p>Filmagnet</p>
            </div>
            <nav>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/Movie">Movie</Link></li>
                </ul>
            </nav>
            <div className='right'>
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <Button classname = "btn-main">
                    Sign In
                </Button>
            </div>
        </header>
    )
}

export default Header

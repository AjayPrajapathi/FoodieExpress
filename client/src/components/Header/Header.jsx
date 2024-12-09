import React from 'react'
import './Header.css'



const Header = () => {

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Craving something delicious? Order now!</h2>
                <p>Discover a menu bursting with flavors, crafted from the finest ingredients by expert chefs. Indulge in a dining experience designed to satisfy and impress</p>
                <a href='#explore-menu'><button>View Menu</button></a>
            </div>
        </div>
    )
}

export default Header

import React, { useEffect, useState } from 'react'
import Header from './Header';
import Search from './Search';
function Landing(){
    

    
    return (
        <main>
            <Header />
            <div className='landing-box container'>
                <div className="text">
                    <p>Filmagent</p>
                    <h1>Unlimited <span>Entertainment</span>,</h1>
                    <h1>Movies, TVs shows, & More.</h1>
                    <Search />
                </div>
            </div>
        </main>
    )
}

export default Landing;

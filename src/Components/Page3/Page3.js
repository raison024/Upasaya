import React from 'react';
import './Page3.css';
import Page3Img from './page3-img.png';

function Page3() {
    return (
        <div className='Page3'>
        <div className='Page3-title'>
            <img src={Page3Img} className='Page3-img' alt='Page3-img'/>
        </div>
        <div className='Page3-maintitle'>
        Precision based healing.
            <div className='Page3-content'>
            </div>
        </div>
    </div>
    )
}

export default Page3    

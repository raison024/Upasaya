import React from 'react';
import './Page1.css';
import HomeImg from './Assets/collage.png';

function Page1() {
    return (
        <div className='Page1'>
            <div className='Page1-title'>
                Welcome to Upasaya
                    <div className='Page1-content'>
                        We organise Wellness Retreats.
                    </div>
            </div>

            <img src={HomeImg} className='Page1-img' alt='HomeCollage'/>
        </div>
    )
}

export default Page1
  
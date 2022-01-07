import React from 'react';
import './Page4.css';

function Page4() {
    return (
        <div className='Page4'>
            <header>
                <h1>The Upasaya Story</h1>
                <p>A timeline of our company history<br/>
                    A combined experience of 40 years in<br/>Hospitality and Wellness.</p>
            </header>

            <ul class="timeline">
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                                    <span class="time-wrapper"><span class="time">1994</span></span>
                        </div>
                        <div class="desc">
                        We put our first foot into the hospitality industry by starting Gold coins farms and housing developers LTD and Gold Coins Club and Resort. 
                        We have been an eco-friendly property surrounded by nature.  
                        The nature in the property is planned in a way to support high oxygen levels and a good wellbeing, 
                        </div>
                    </div>
                </li>
                
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                                    <span class="time-wrapper"><span class="time">2007</span></span>
                        </div>
                        <div class="desc">
                            Started a Nature cure center in Nelamangla in the name of Gold Star Yoga & Naturopathy Ltd to heal all kinds of chronic diseases using Naturopathy and Ayurveda. 
                        </div>
                    </div>
                </li>

                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                                    <span class="time-wrapper"><span class="time">2019</span></span>
                        </div>
                        <div class="desc">
                        Started an exclusive center for Diabetes reversal for healing naturally and holistically in the name of Upasaya Wellness Retreat. 
                        After 13 years of R&D in naturopathy and Ayurveda, we realised that Diabetes cannot be cured by Naturopathy as it is a lifestyle disorder.
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Page4

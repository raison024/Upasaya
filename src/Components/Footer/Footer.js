import React from 'react';
import './Footer.css';
import Logo from '../../Assets/upasaya.png';
import {Link} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import {Facebook, Instagram, Twitter, Email} from '@mui/icons-material/';


const AboutContent = [
    { id: 1, name: "Company", link: '/contact'},
    { id: 2, name: "Blog", link: '/contact'},
    { id: 3, name: "Newsletter", link: '/contact'},
  ];
  const SocialContent = [
    { id: 1, name: "Facebook", link: ''},
    { id: 2, name: "Instagram", link: 'FacebookClick'},
    { id: 3, name: "LinkedIn", link: 'FacebookClick'},
    { id: 4, name: "Company", link: 'FacebookClick'}
  ];
  const FacebookClick = () => {
    window.open("https://www.facebook.com/upasayawellness/");
  };
  const InstagramClick = () => {
    window.open("https://www.instagram.com/upasayawellness/?hl=en");
  };
  


function Footer() {
    return (
        <div className='Footer'>
            <div className='FooterImg-container'>
                <img src={Logo} className='Footer-logo' /> 
                <div className='Company-title'><br/>U-turn Lifestyle Private Limited</div>
            </div>
            <div className='FooterContent-container'>
                <div className='FooterSection-container'>
                        Subscribe to our Newsletter
                        <div className='Email-container'>
                            <input id='email-input' type="text" className='Email-input' placeholder='Enter your email' />
                            <IconButton>
                                <Email sx={{ color:'#fff'}} fontSize='medium'/>
                            </IconButton>
                        </div>
                       
                </div>

                <div className='FooterSection-container'>
                        About
                        {AboutContent.map(about => {
                            return (
                                <div key={about.id}>
                                   <Link to={about.link} className='FooterSection-content'>
                                       {about.name}</Link>
                                </div>
                            )
                        })}
                </div>

                <div className='FooterSection-container'>
                        Social
                        {SocialContent.map(social => {
                            return (
                                <div key={social.id}>
                                    <Link className='FooterSection-content'>
                                        {social.name}</Link>
                                </div>
                            )
                        })}
                </div>
                <div className='FooterSection-container'>
                        Follow Us
                        <div className='Footer-row'>
                        <IconButton onClick={FacebookClick}>
                            <Facebook sx={{ color:'#fff'}} />
                        </IconButton>
                        <IconButton onClick={InstagramClick}>
                            <Instagram sx={{ color:'#fff'}} />
                        </IconButton>
                        <IconButton>
                            <Twitter sx={{ color:'#fff'}} />
                        </IconButton>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

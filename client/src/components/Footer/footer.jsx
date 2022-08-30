import React from 'react';
import Logo from './Logo.png'

import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'><h3 className='creat'>Created</h3><h3 className='by'>by</h3><a href="https://github.com/GustavoSilverio" target="_blanck"><img className='log-img' src={Logo} alt="" /></a></footer>
    );
}

export default Footer;
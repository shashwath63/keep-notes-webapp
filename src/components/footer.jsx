import react from 'react';
import ReactDom from 'react-dom';

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
       <footer>
       <p>copyright ©️ {currentYear}</p>
       </footer> 
    )
}

export default Footer;
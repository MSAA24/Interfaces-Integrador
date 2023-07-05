import React from 'react';
import "../Estilo/footer.css";

const Footer = () => {
    return ( 
        <div className = "footer">
            <div className="footer-redes">
                        <div className="redes-links">
                            <div>
                                <a href="https://facebook.com/"><img src="https://drive.google.com/uc?export=view&id=1P1rqBIUeFGIcA7ykBUtsYXsAtyz2mNV0" alt="logo" /></a>
                            </div>
                            <div>
                                <a href="https://instagram.com/" ><img src="https://drive.google.com/uc?export=view&id=1q-q9sK4tMy69tJYHH-EJdsdR08yNYemG" alt="logo" /></a>
                            </div>
                            <div>
                                <a href="https://linkedin.com/" ><img src="https://drive.google.com/uc?export=view&id=1N7siIF_T_MGUuy2-SCejZNc6EC0Q9mGp" alt="logo" /></a>
                            </div>
                        </div>                           
            </div>
            <div className='footer-titulos'>
                <div className='footer-titulos-container'>
                    <h4>™ & © 2023 Rito Games, Inc.  League of Legends and all related logos, characters, names and distinctive likenesses thereof are exclusive property of Riot Games, Inc.  All Rights Reserved.</h4>
                </div>
                <div className='footer-titulos-container'>
                    <h4>© 2023 Rito Games Totalmente Real No Plagio</h4> 
                </div>                  
            </div>
        </div>     
    );
}

export default Footer;
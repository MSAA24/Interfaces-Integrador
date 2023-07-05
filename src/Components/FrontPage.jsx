import "../Estilo/frontpage.css";

const FrontPage = () => {
    return (         
        <div className='frontPage'>
            <div className='frontPage-titulo'>
                <div>
                    <h1>CHOOSE YOUR CHAMPION </h1>
                </div>
                <div>
                    <h2>Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift.</h2>
                </div>
            </div>
            <div className='gameModes'>
                <div className='gameModes-title'>
                    <h2>Game Modes</h2>
                </div>
                
                <div className='gameModes-container'>
                    <div className='gameModes-mode'>
                        <h3>SUMMONER'S RIFT</h3>
                        <div className="gameModes-content">
                            <div className='gameModes-map'>
                                <img src="rift.png" alt="" />
                            </div>
                            <div className='gameModes-description'>
                                <h4>
                                    Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.
                                </h4>
                            </div>
                        </div>
                        
                    </div>
                    <div className='gameModes-mode'>
                        <h3>TEAMFIGHT TACTICS</h3>                     
                        <div className="gameModes-content">
                            <div className='gameModes-map'>
                                <img src="TFT.png" alt="" />
                            </div>
                            <div className='gameModes-description'>
                                <h4>
                                Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing.
                                </h4>
                            </div>
                        </div>                     
                    </div>
                    <div className='gameModes-mode'>
                        <h3>ARAM</h3>
                        <div className="gameModes-content">
                            <div className='gameModes-map'>
                                <img src="ARAM.png" alt="" />
                            </div>
                            <div className='gameModes-description'>
                                <h4>
                                    Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mod.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div>
            </div>
        </div>
    );
}
export default FrontPage;
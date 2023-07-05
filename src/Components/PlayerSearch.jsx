import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "../Estilo/summoner.css";
import { API_KEY } from '../js/APIKey';

const PlayerSearch = () => {
    const [busquedaId, setBusquedaId] = useState('Latita de Birra');
    const [infoSummoner, setearInfoSummoner] = useState('');

    
    const obtenerSummonerPorNombre = async (name) =>  {     
        try {
            const respuesta = await axios.get(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`);       
            const summonerData = respuesta.data;
            console.log(summonerData)
            setearInfoSummoner(summonerData);
        } catch (error) {
            console.error('Error al obtener la información del summoner:', error);
        }
    };
    
    const busquedaSummoner = () => {
        if (busquedaId) {
            obtenerSummonerPorNombre(busquedaId);
        }
    };
    
    useEffect(() => {
        busquedaSummoner();
    }, []);
    
    return (         
        <div className='summoner'>
            <div className='summoner-title'>
                <h1>SUMMONER SEARCH BY NAME</h1>
            </div>            
            <div className='summoner-Button'>           
                <div className='summoner-container'>
                    <div className='summoner-input'>
                    <input type="text" placeholder="Summoner's name" onChange={e => setBusquedaId(e.target.value) } />
                    </div> 
                    <div>
                        <Button variant="dark" onClick={busquedaSummoner}>Search</Button>               
                    </div> 
                </div>
            </div>           
            {infoSummoner && (
                <div> 
                    <div className='summoner-Image'>                 
                        <img src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${infoSummoner.profileIconId}.png`} alt="summoner logo"></img>
                    </div>
                    <div className='summoner-info'>
                        <div><strong>Name: </strong>{infoSummoner.name}</div>
                        <div><strong>Summoner Level: </strong>  {infoSummoner.summonerLevel}</div>     
                    </div>       
                </div>
            )}
        </div>
    );    
};
export default PlayerSearch;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "../Estilo/champion.css";
import { API_KEY } from '../js/APIKey';

const ChampionId = () => {
  const [busquedaId, setBusquedaId] = useState('');
  const [infoChampion, setInfoChampion] = useState({});

    const obtenerCampeonPorId = async (id) => {
      try {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json`);       
        const championData = response.data.data[id];
        console.log(championData)
        setInfoChampion(championData);
        localStorage.setItem('ultimoChampionBuscado', id);
      } catch (error) {
        console.error('Error al obtener la información del campeón:', error);
      }
    };

    useEffect(() => {
      const ultimoCampeonBuscado = localStorage.getItem('ultimoChampionBuscado'); 
      if (ultimoCampeonBuscado) {
        setBusquedaId(ultimoCampeonBuscado);
        obtenerCampeonPorId(ultimoCampeonBuscado);
      } else {
        setBusquedaId('Aatrox'); 
        obtenerCampeonPorId('Aatrox');
      }
    }, []);

    const buscarCampeonPorId = () => {
      if (busquedaId) {
        obtenerCampeonPorId(busquedaId);
      }
    };
    
    return (
        <div className='championId'>
            <div className='championId-title'>
              <h1>CHAMPION SEARCH BY NAME</h1>
            </div>
            <div className='champions-Button'>            
              
              
              <div className='champions-container'>
                <div className='champion-input'>
                  <input type="text" placeholder="Champion's name" onChange={e => setBusquedaId(e.target.value) } />
                </div> 
                <div>
                  <Button variant="dark" onClick={buscarCampeonPorId}>Search</Button>               
                </div> 
              </div>
            </div>
            {infoChampion.name && (
            <div className='championId-container'>
              <div className='championId-Image'>                 
                  <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${infoChampion.id}_0.jpg?api_key=${API_KEY}`} alt="champion img"></img>      
              </div>
              <div className="championId-datos">
                  <div><h1> <strong>{infoChampion.name} {infoChampion.title}</strong></h1></div>
                  <div>{infoChampion.blurb}</div>                 
                  <div className="championId-datos-stats">
                    <div><strong>Type:</strong> {infoChampion.tags}</div>
                    <div><strong>HP:</strong> {infoChampion.stats.hp} </div>
                    <div><strong>Armor:</strong> {infoChampion.stats.armor} </div>
                    <div><strong>Attack:</strong> {infoChampion.stats.attackdamage} </div>
                    <div><strong>Movement Speed:</strong> {infoChampion.stats.movespeed} </div>
                  </div>
              </div>              
            </div>
            )}  
        </div>
    );
};

export default ChampionId;
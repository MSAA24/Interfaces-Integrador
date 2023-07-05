import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "../Estilo/champion.css";
import { API_KEY } from '../js/APIKey';

const Champions = () => {
  const [listaChampions, setearChampion] = useState([]);
  const [cantidad, setearCantidad] = useState(16);

    const obtenerCampeones = async () => {
      try {
        const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json');
        const championData = response.data.data;
        const champions = Object.values(championData);

        const championsAleatorios = mezclarLista(champions);

        const campeonesSegunCantidad = championsAleatorios.slice(0, cantidad);
      setearChampion(campeonesSegunCantidad);
    } catch (error) {
      console.error('Error al obtener los champions:', error);
    }};

    const mezclarLista = (array) => {
      const nuevaLista = array.slice();
      for (let i = nuevaLista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevaLista[i], nuevaLista[j]] = [nuevaLista[j], nuevaLista[i]];
      }
      return nuevaLista;
    };
    
    useEffect(() => {
      obtenerCampeones();
    }, []);

    const busquedaListaChampions = () => {
      obtenerCampeones();
    };
    

    
    return (
      <div className='champions'>
        <div className='champions-title'>
          <h1> CHAMPION RANDOMIZER BY AMOUNT</h1>       
        </div>        
        <div className='champions-Button'>
          <div className='champions-container'>
            <div className='champion-input'>
              <input 
                type="text" 
                value={cantidad} 
                placeholder='(Max. 166)' 
                onChange={e => setearCantidad(e.target.value) } 
              />
            </div>
            <div>
              <Button 
                variant="dark" 
                onClick={busquedaListaChampions}>Search
              </Button>
            </div>
          </div>  
        </div>              
        <div className='champions-map-grid'>
          {listaChampions.map((champion) => (
            <div key={champion.id} >
              <div>
                <strong>{champion.name}</strong>
              </div>             
              <div className="champions-info"> 
                  <img src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${champion.id}.png?api_key=${API_KEY}`} alt="champion img"></img>
              </div>             
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Champions;
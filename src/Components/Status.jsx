import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "../Estilo/status.css";
import { API_KEY } from '../js/APIKey';

const Status = () => {
    const [serverStatus, setearServerStatus] = useState([]); 
    const [servidorResponde, setRespondeServidor] = useState(false);
    
    const obtenerStatus = async () => {
        try {
            const respuesta = await axios.get(`https://la2.api.riotgames.com/lol/status/v4/platform-data?api_key=${API_KEY}`);
            console.log(respuesta);
            setearServerStatus(respuesta.request);
            setRespondeServidor(true);
        } catch (error) {
        console.error('Error al ver status de servidor:', error);
        setRespondeServidor(false);
    }};

    useEffect(() => {
        obtenerStatus();
    }, []);
    
    return (
        <div className="status">
            <div className='status-titulo'>
                <h1>API KEY STATUS</h1>
            </div>
            
            {servidorResponde ? (
                <div className='status-container'>
                    <div>
                        <div className='status-respuesta'>
                            <h3>SERVER RESPONDS</h3>
                        </div>
                        <div className='status-code'>
                            Code:{serverStatus.status} {serverStatus.statusText}
                        </div>
                    </div>
                    <div className='status-respuesta-img'>
                        <img src="checkmark.png" alt="checkmark" />    
                    </div>             
                </div>
            ) : (
                <div className='status-container'>
                    <div>
                        <div className='status-respuesta'>
                            <h3>SERVER IS NOT RESPONDING, API KEY EXPIRED </h3>
                        </div>
                        <div className='status-code'>
                            Code: {serverStatus.status} {serverStatus.statusText}
                        </div>
                    </div>
                    <div className='status-respuesta-img'>
                        <img src="xmark.png" alt="xmark" />    
                    </div> 
                </div>
            )}
        </div>
    );

}
export default Status;
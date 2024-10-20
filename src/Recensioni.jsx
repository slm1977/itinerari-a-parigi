import SpeechBubble from './SpeechBubble'; // Importiamo il componente
import listaRecensioni from './recensioni.json';
import React, { useState, useEffect } from 'react';
const Recensioni = (props) =>

{
    const [recensioni, setRecensioni] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
          setRecensioni(listaRecensioni);
          console.log("recensioni:", listaRecensioni)
        } catch (err) {
            console.log("Errore Recensioni:", err)
          setError('Errore nel caricamento delle recensioni');
        }
      }, []);
   
    return (
    <div style={{display:"flex" , flexDirection:"column", 
        justifyContent:"space-around" , margin:"20px"}} 
        className="container-fluid imageBorder">
        {recensioni.map((recensione, index) => {
            return(
             <SpeechBubble data={recensione.data} 
                author={recensione.autore.slice(0, recensione.autore.indexOf(" "))} text={recensione.testo} />)
        })
    }   
    </div>
)}

export default Recensioni
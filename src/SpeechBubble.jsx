import React from 'react';
import './SpeechBubble.css'; // Importiamo lo stile CSS per la nuvoletta

const SpeechBubble = ({ text, author, data }) => {
  return (
    <div className="speech-bubble">
      <p>{text}</p>
      <div style={{paddingTop:"10px", paddingBottom:"10px", display:"flex", justifyContent:"space-between"}}>
        <div>{data}</div>
        <div style={{textAlign:"right"}}>{author}</div>
      </div>
     
      <div className="speech-bubble-arrow"></div>
    </div>
  );
};

export default SpeechBubble;

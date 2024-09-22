import { useState } from "react";
function VerPiada({joke,response}) {
    const [verPiada, setVerPiada] = useState(false);
    const[buttonVer, setButtonVer] = useState("ver piada");
    function handleClick() {
      if (verPiada) {
        setVerPiada(false)
        setButtonVer("ver piada")

      }else{
        setVerPiada(true)
        setButtonVer("esconder piada")
      }
    }
  
    return (
      <div>
        <p>{joke}</p>
       {verPiada && (
         <p>{response}</p>
        )}
      <button  id="Resposta" onClick={handleClick}>
        {buttonVer}
      </button>
      </div>
    );
}
  export default VerPiada;
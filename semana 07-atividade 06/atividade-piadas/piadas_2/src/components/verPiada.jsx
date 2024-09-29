import { useState } from "react";
function VerPiada({joke,response}) {
    const [verPiada, setVerPiada] = useState(false);
    const UsarResposta = ()=>{
        setVerPiada(!verPiada)
    }
    return (
        <>
        <p>{joke}</p>
        {verPiada && <p>{response}</p>}
        <button id="Resposta" onClick={UsarResposta}>
          {verPiada ? "Esconder piada" : "Ver piada"}
        </button>
      </>
    );
}
  export default VerPiada;
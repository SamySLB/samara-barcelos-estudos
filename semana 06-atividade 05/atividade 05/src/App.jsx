import { useState,useEffect } from 'react';
import './App.css'
import VerPiada from './components/verPiada'
function ShowPiadas() {


    const [piadas, setPiadas] = useState([]);
    const[newItem,setNewItem] =useState("");
    const[respostaPiada,setRespostaPiada] = useState("")
    const[ApagarPiada,setApagarPiada] = useState(null)

    function DeletarPiada(id){
      // console.log(id)
      // const delectPiada = piadas.findIndex(piada=>
      // Number( piada.id) === Number(id)
      // )
      // console.log(delectPiada)
      // if(delectPiada != -1){
      //   piadas.splice(delectPiada,1)
      // }
      const novasPiadas = piadas.filter((piada) => Number(piada.id) !== Number(id));
      setPiadas(novasPiadas)
    }

  
    function handleSubmit(e) {
      e.preventDefault()
      if(piadas.length >=10){
        alert("Delete uma piada para adicionar outra");
        return;
      }
      const idPiada = Number(piadas.at(-1).id) +1
      setPiadas([...piadas,{id:idPiada,joke:newItem, response:respostaPiada}])
    }
  
  
    useEffect(() => {
      const href = "https://file.notion.so/f/f/41b25335-e89a-42b0-8442-4d0289d2afe5/0b6a58a2-eae1-474f-81f7-ae4c9e4e7cab/piadas.json?table=block&id=106f00ff-c8f3-80dc-80cc-f5d808907c90&spaceId=41b25335-e89a-42b0-8442-4d0289d2afe5&expirationTimestamp=1727028000000&signature=3ZBF4hfL23n-Ehz3D6EbxLustFk14Cme_u3gk-RQvzE&downloadName=piadas.json";
      fetch(href)
        .then((response) => response.json())
        .then((data) => setPiadas(data));
    }, []);


    return (<>
            
        <h1>* Compass Piadas *</h1>
  
    
    <form onSubmit={ handleSubmit}>
    <input
    id="AdicionePiada"
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Adicione piada"
      />
      <br/>
       <input
       id="AdicioneResposta"
        type="text"
        onChange={(e) => setRespostaPiada(e.target.value)}
        placeholder="Adicione resposta"
      />
      <button id="AdicionarPiada" type= "submit">Adicionar</button>
    </form>
    <input
    id="DeletaPiada"
        type="text"
        onBlur={(e) => setApagarPiada(e.target.value)}
        placeholder="Escreva um número"
      />
    <button id="DeletarPiada" onClick={()=> DeletarPiada(ApagarPiada)} >Deletar</button>
       
      <article>
        <h2>---Piadas---</h2>
        {piadas.map((piada) => (
          <article key={piada.id}>  
          <h3>{piada.id}</h3>
          <VerPiada id={piada.id} joke={piada.joke} response={piada.response}/>  
          </article>
        ))}
      </article>
  
  </> );
  }

export default ShowPiadas 


import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import VerPiada from './components/verPiada';

function App() {
 const[jokes, setJokes]= useState([]);
 const[newItem,setNewItem] =useState("");
 const[respostaPiada,setRespostaPiada] = useState("")

 const deleteItem = async (id) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 

    const response = await axios.delete(`http://localhost:3100/Jokes/${id}`);
    if (response.status === 200) {
   
      setJokes(jokes.filter(jokes => jokes.id !== id));
    }
  } catch (error) {
    console.error('Erro ao deletar o item:', error);
  }
};

 useEffect(()=>{
  axios
  .get("http://localhost:3100/Jokes")
  .then((response)=>{
    console.log(response.data);
    setJokes(response.data);
  }) 
  .catch((error)=>{
    console.log("ocorreu um erro", error)
  })
 }, [])

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (jokes.length >= 10) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 

    alert('Delete uma piada para adicionar outra');
    return;
  }

  
  const novaPiada = {
    id: jokes.length > 0 ? Number(jokes.at(-1).id) + 1 : 1, 
    joke: newItem,
    response: respostaPiada
  };

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    const response = await axios.post('http://localhost:3100/Jokes', novaPiada);
    if (response.status === 200) {
     
      setJokes([...jokes, response.data]);
     
      setNewItem('');
      setRespostaPiada('');
    }
  } catch (error) {
    console.error('Erro ao adicionar a piada:', error);
  }
};

  return (
    <>
    <form  onSubmit={ handleSubmit}>
     <input id= "AdicionePiada" type="text" placeholder='crie uma piada'
     onChange={(e) => setNewItem(e.target.value)}/>
     <br/>

     <input id="AdicioneResposta" type="text" placeholder='resposta da piada'
       onChange={(e) => setRespostaPiada(e.target.value)}/>

     <button id="adicionarPiada" type="submit">Adicionar piada </button>
     </form>
     <div>
    {jokes.map((piada)=>(
      <article key={piada.id}>
        <VerPiada joke={piada.joke} response={piada.response} />
        <br/>
        <button id="DeletarPiada" onClick={() =>  deleteItem(piada.id)} >Deletar</button>
      </article>
    ))}
     </div>

    </>
  )
}

export default App

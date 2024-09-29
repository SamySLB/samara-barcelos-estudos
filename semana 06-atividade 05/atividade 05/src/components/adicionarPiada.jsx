import{useState} from "react"
function MyButtonAdiciona() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState(""); // Estado para o novo item



  const addItem = async () => {
   {
      const response = await fetch("https://file.notion.so/f/f/41b25335-e89a-42b0-8442-4d0289d2afe5/0b6a58a2-eae1-474f-81f7-ae4c9e4e7cab/piadas.json?table=block&id=106f00ff-c8f3-80dc-80cc-f5d808907c90&spaceId=41b25335-e89a-42b0-8442-4d0289d2afe5&expirationTimestamp=1727028000000&signature=3ZBF4hfL23n-Ehz3D6EbxLustFk14Cme_u3gk-RQvzE&downloadName=piadas.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newItem }), // Dados do novo item
      });

      if (response.ok) {
        const addedItem = await response.json();
        setItems([...items, addedItem]); // Atualiza o estado com o novo item
        setNewItem(""); // Limpa o campo de entrada
      } 
  }}

    // Função para remover um item
    const removeItem = async (id) => {
      try {
        const response = await fetch(`"https://file.notion.so/f/f/41b25335-e89a-42b0-8442-4d0289d2afe5/0b6a58a2-eae1-474f-81f7-ae4c9e4e7cab/piadas.json?table=block&id=106f00ff-c8f3-80dc-80cc-f5d808907c90&spaceId=41b25335-e89a-42b0-8442-4d0289d2afe5&expirationTimestamp=1727028000000&signature=3ZBF4hfL23n-Ehz3D6EbxLustFk14Cme_u3gk-RQvzE&downloadName=piadas.json"{id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          setItems(items.filter((item) => item.id !== id)); // Atualiza o estado removendo o item
        } else {
          console.error("Erro ao remover o item.");
        }
      } catch (error) {
        console.error("Erro ao remover o item:", error);
      }
    };
  

    return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </li>
          ))}
        </ul>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Adicione piada"
      />
      <button onClick={addItem}>Adicionar</button>
    </div>
  );
}


  export default MyButtonAdiciona;
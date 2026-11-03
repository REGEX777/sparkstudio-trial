import { useState, useEffect } from "react";

function App(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    fetch("http://localhost:3000/items").then(res=>res.json()).then(data => {setItems(data); console.log(items)}).catch(console.error).finally(()=>setLoading(false));
  }, []);

  if(loading){
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div>
      <h1>Items</h1>
      {items.map(item =>{
        return (
        <div key={item.id}>
          <span>{item.id}. </span>
          <span>{item.name}</span>
        </div>)
      })}
    </div>
  )
}

export default App;
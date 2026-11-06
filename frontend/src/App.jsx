
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Items</h1>
      <p className="subtitle">List of items</p>

      <div className="item-list">
        {items.map(item => (
          <div className="item" key={item.id}>
            <span className="item-id">{item.id}</span>
            <span className="item-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

const items = [
    {id: 1, name: "Item 1"},
    {id: 2, name: "Item 2"},
    {id: 3, name: "Item 3"},
]

app.get("/items", (req, res)=>{
    res.json(items)
})


app.listen(3000, ()=>{
    console.log("App Started On Port 3000")
})
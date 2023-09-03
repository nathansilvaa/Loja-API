import axios from 'axios';
import './App.css';
import React, {useState, useEffect} from 'react'


function App() {
  const [produtos, setProdutos] = useState([])
  const url ='https://fakestoreapi.com/products'

  useEffect(()=>{
    axios.get(url)
    .then(resposta=>{
      setProdutos(resposta.data)
    })
    .catch(error =>{
      console.log(error)
    });
  },[]);
  
  
  
  return (
    <div className="App">
      <h1>Minha loja</h1>
      <ul> 
        {produtos.map(produto => (
          <li key = {produto.id}>
            <h2>{produto.title}</h2>
            <img src={produto.image} alt={produto.title}/>
            <div className='div'>
              <p>R${produto.price}</p>
              <button>Adicionar ao carrinho</button>
            </div>
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default App;

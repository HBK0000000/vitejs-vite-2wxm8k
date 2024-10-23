import React from 'react';
import './App.css';

const dogBreeds = [
  {
    id: 1,
    title: "Dolly Guarana",
    price: "R$ 10,00",
    image: "https://images.uncyc.org/pt/d/d6/DOLLYNHOSEUAMIGUINHO.jpeg"
  },
  {
    id: 2,
    title: "Coca Limão",
    price: "R$ 12,00",
    image: "https://images-americanas.b2w.io/produtos/1672284616/imagens/refigerante-coca-cola-limao-importada-330ml/1672284624_1_large.jpg"
  },
  {
    id: 3,
    title: "Fanta Uva",
    price: "R$ 10,00",
    image: "https://phygital-files.mercafacil.com/catalogo/uploads/produto/refrigerante_fanta_uva_pet_2_litros_50c6cec8-e65f-4152-a6df-1f9b05c2815f.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Raças de Cachorros</h1>
      <div className="product-list">
        {dogBreeds.map(dog => (
          <div key={dog.id} className="product">
            <img src={dog.image} alt={dog.title} />
            <h2>{dog.title}</h2>
            <p>{dog.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
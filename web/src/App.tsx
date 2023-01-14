import { useState } from "react";

import Close from './assets/close.svg';
import ProductImage from "./assets/sofa.svg";
import Product3D from './assets/sofa.gif';
import Vector from "./assets/vector.svg";

const product = {
  code: 42404,
  title: "Sofá Margot II - Rosé",
  price: 4000,
  alt: "Sofá na cor rosé",
};

function App() {
  const [isActive, setIsActive] = useState(false);

  function handleActiveVision() {
    {isActive ? setIsActive(false) : setIsActive(true)}
  }

  return (
    <div className="product">
      <div className="product-image">
        <button type="button" title={isActive ? "Visão 360°" : "Fechar"} onClick={handleActiveVision}>
          <img src={isActive ? Vector : Close} alt={isActive ? "Visão 360°" : "Fechar"} />
        </button>

        <img src={isActive ? ProductImage : Product3D} alt={product.alt} />
      </div>

      <div className="product-info">
        <div className="text">
          <span className="code">Código: {product.code}</span>
          <h1 className="title">{product.title}</h1>
          <p className="price">R$ {product.price}</p>
        </div>

        <button className="button" onClick={handleActiveVision}>
          Adicionar à cesta
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

import Close from "./assets/close.svg";
import ProductImage from "./assets/sofa.svg";
import Product3D from "./assets/sofa.gif";
import Vector from "./assets/vector.svg";

const product = {
  code: 42404,
  title: "Sofá Margot II - Rosé",
  price: new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumSignificantDigits: 2,
  }).format(4000),
  alt: "Sofá na cor rosé",
};

function App() {
  const [isActive, setIsActive] = useState(false);

  function handleActiveVision() {
    {
      isActive ? setIsActive(false) : setIsActive(true);
    }
  }

  return (
    <div className="product">
      <div className="product-image">
        <button
          type="button"
          title={isActive ? "Fechar" : "Visão 360°"}
          onClick={handleActiveVision}
        >
          <img
            src={isActive ? Close : Vector}
            alt={isActive ? "Visão 360°" : "Fechar"}
          />
        </button>

        <img src={isActive ? Product3D : ProductImage} alt={product.alt} />
      </div>

      <div className="product-info">
        <div className="text">
          <span className="code">Código: {product.code}</span>
          <h1 className="title">{product.title}</h1>
          <p className="price">{product.price}</p>
        </div>

        <button className="button">
          Adicionar à cesta
        </button>
      </div>
    </div>
  );
}

export default App;

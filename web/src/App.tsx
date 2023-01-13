import product from "./assets/sofa.svg";
import vector from "./assets/vector.svg";

function App() {
  return (
    <div className="product">
      <div className="product-image">
        <button className="ml-[81%]">
          <img
            src={vector}
            className="vector"
            alt="Ativar visão 360° do produto"
          />
        </button>

        <img src={product} className="image" alt="Sofá na cor rosé" />
      </div>

      <div className="product-info">
        <div className="text">
          <span className="code">Código: 42404</span>
          <h1 className="title">Sofá Margot II - Rosé</h1>
          <p className="price">R$ 4.000</p>
        </div>

        <button className="button">Adicionar à cesta</button>

      </div>
    </div>
  );
}

export default App;

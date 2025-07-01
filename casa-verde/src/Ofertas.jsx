import React, { useEffect, useState } from "react";
import "./Ofertas.Module.css";
import { getPlantas } from "./api/getPlantas";

const NossasPlantas = () => {
  const [plantas, setPlantas] = useState([]);
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [ordenarPor, setOrdenarPor] = useState("");

  useEffect(() => {
    const fetchPlantas = async () => {
      const dados = await getPlantas();
      const emEstoque = dados.filter((planta) => planta.estoque > 0);
      setPlantas(emEstoque);
    };
    fetchPlantas();
  }, []);

  const plantasFiltradas = plantas
    .filter((planta) => {
      const preco = planta.preco;
      if (precoMin && preco < parseFloat(precoMin)) return false;
      if (precoMax && preco > parseFloat(precoMax)) return false;
      return true;
    })
    .sort((a, b) => {
      if (ordenarPor === "nome") return a.nome.localeCompare(b.nome);
      if (ordenarPor === "preco") return a.preco - b.preco;
      return 0;
    });

  return (
    <div className="ofertas">
      <h3 className="subtitulo-ofertas">Conheça nossas</h3>
      <h2 className="titulo-ofertas">Nossas plantas</h2>

      <div className="filtros">
        <input
          type="number"
          placeholder="Preço mínimo"
          value={precoMin}
          onChange={(e) => setPrecoMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço máximo"
          value={precoMax}
          onChange={(e) => setPrecoMax(e.target.value)}
        />
        <select value={ordenarPor} onChange={(e) => setOrdenarPor(e.target.value)}>
          <option value="">Ordenar por</option>
          <option value="nome">Nome (A-Z)</option>
          <option value="preco">Preço (menor primeiro)</option>
        </select>
      </div>

      <div className="grid-ofertas">
        {plantasFiltradas.map((planta, index) => (
          <div className="card-oferta" key={index}>
            <img src={planta.imagem} alt={planta.nome} className="img-oferta" />
            <div className="card-conteudo">
              <h3 className="nome-planta">{planta.nome}</h3>
              <p className="preco">R$ {planta.preco.toFixed(2)}</p>
              <a href="#" className="comprar-link">
                Comprar <span className="seta">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NossasPlantas;
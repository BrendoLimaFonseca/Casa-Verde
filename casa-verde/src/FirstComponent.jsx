import React, { useEffect, useState } from 'react';
import "./FirstComponent.css";

const FirstComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (isValidEmail(email)) {
      alert("Obrigado pela sua assinatura, você receberá nossas novidades no e-mail");
      setEmail(""); // limpa o campo
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  };

  return (
    <div>
      <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <ul className='ul'>
          <li><img src="/logo.png" className='logo' alt="" width={170} /></li>
          <li><a href="">como fazer</a></li>
          <li className='barra'><p>/</p></li>
          <li><a href="">ofertas</a></li>
          <li className='barra'><p>/</p></li>
          <li><a href="">depoimentos</a></li>
          <li className='barra'><p>/</p></li>
          <li><a href="">Videos</a></li>
          <li className='barra'><p>/</p></li>
          <li><a href="">Meu carrinho</a></li>
        </ul>
      </nav>

      <div className='imagem-container'>
        <img className='amarelo' src="/Vector.png" alt="" />
        <img className='planta' src="/planta.png" alt="" />
      </div>

      <div className='home'>
        <p className='p1'  style={{  marginBottom: '-9vh' }}>Sua casa com as</p>
        <h1 className='titulo2' style={{ marginBottom: '2px' }}>melhores<br />plantas</h1>
        <p className='p2' style={{  marginBottom: '2px', color: '#202020' }}>
          Encontre aqui uma vasta seleção de plantas para decorar a <br />
          sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.<br />
          Entre com seu e-mail e assine nossa newsletter para saber<br />
          das novidades da marca.
        </p>
        <div className='input'>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='butt-input' onClick={handleSubscribe}>Assinar newsletter</button>
        </div>
      </div>

      <div className="secao-planta">
        <img src="/planta-card.png" alt="folha" className="img-folha" />

        <div className="conteudo-texto">
          <p className="subtitulo">Como conseguir</p>
          <h2 className="titulo">minha planta</h2>

          <ul className="lista-passos">
            <li>
              <span className="bolinha"></span>
              <p>Escolha suas plantas</p>
            </li>
            <li>
              <span className="bolinha"></span>
              <p>Faça seu pedido</p>
            </li>
            <li>
              <span className="bolinha"></span>
              <p>Aguardir na sua casa</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;

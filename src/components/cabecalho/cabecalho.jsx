import React from "react";

import Logo from "../../images/Logo.png";

//CSS
import "./cabecalho.css";

import {Link} from "react-scroll"; 

let aberto = true;

const abrirMenu = () => {
    const menu = document.querySelector(".menu");

    if(aberto)
        menu.className += " on";
    else 
        menu.className = "container-lg menu";
    
    aberto = !aberto;
}

const Cabecalho = () => {
    return (
        <header>
            <div className="container-lg menu">
                <a href="/"><img src={Logo} alt="Logo da empresa Santos Baterias." className="logo" title="Santos Baterias - A melhor opção para você e seu carro! :)" loading="lazy"/></a>
                <div className="menu-toggle" onClick={abrirMenu}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500}><a href="#home" className="texto-bold texto-branco scroll" title="Receba boas vindas!">Home</a></Link>
                        </li>
                        <li>
                            <Link to="produtos" smooth={true} duration={500}><a href="#produtos" className="texto-bold texto-branco scroll" title="Conheça nossos produtos!">Produtos</a></Link>
                        </li>
                        <li>
                            <Link to="quemsomos" smooth={true} duration={500}><a href="#quemsomos" className="texto-bold texto-branco scroll" title="Saiba o porquê somos a melhor opção para você e seu carro!">Quem somos</a></Link>
                        </li>
                        <li>
                            <Link to="visitenos" smooth={true} duration={500}><a href="#visitenos" className="texto-bold texto-branco scroll" title="Veja nosso endereço!">Visite-nos</a></Link>
                        </li>
                        <li>
                            <Link to="contato" smooth={true} duration={500}><a href="#contato" className="texto-bold texto-branco scroll" title="Veja nosso contato!">Contato</a></Link>
                        </li>
                        <div>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=5511983164019&text=Olá!%20Gostaria%20de%20..." target="blank"><i className="fab fa-whatsapp"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/andre.luizdossantos.3701" target="blank"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/feitosabaterias?r=nametag" target="blank"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/dir//Feitosa+Baterias+-+Camil%C3%B3polis+-+Av.+Pinhal,+1169+-+Vila+Camilopolis,+Santo+Andr%C3%A9+-+SP,+09240-021/@-23.6238057,-46.525691,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce5dd5520bc31b:0x6f95a9e5ed315aca!2m2!1d-46.525058!2d-23.623442!3e0" target="blank"><i className="fas fa-map-marker-alt"></i></a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho;
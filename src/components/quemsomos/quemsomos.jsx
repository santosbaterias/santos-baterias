import React from "react";

//CSS
import "./quemsomos.css";

const QuemSomos = () => {
    return (
        <section id="quemsomos" className="container-wd">
            <h1 className="titulo texto-preto">Somos a melhor opção para você!</h1>
            <ul>
                <li className="texto-light texto-preto"><div className="circulo"></div>Pagamento facilitado;</li>
                <li className="texto-light texto-preto"><div className="circulo"></div>Instalação grátis;</li>
                <li className="texto-light texto-preto"><div className="circulo"></div>Qualidade;</li>
                <li className="texto-light texto-preto"><div className="circulo"></div>Suporte;</li>
                <li className="texto-light texto-preto"><div className="circulo"></div>Te ajudamos na escolha do produto;</li>
                <li className="texto-light texto-preto"><div className="circulo"></div>Atendimento excepcional!</li>
            </ul>
        </section>
    )
}

export default QuemSomos;
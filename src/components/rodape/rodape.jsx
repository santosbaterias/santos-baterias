import React from "react";
import Logo from "../../images/Logo.png";

//CSS
import "./rodape.css";

const Rodape = () => {
    return (
        <footer>
            <div className="container-wd">
                <a href="/"><img src={Logo} alt="Logo da empresa Santos Baterias." className="logo" title="Santos Baterias - A melhor opção para você e seu carro! :)" loading="lazy"/></a>
                <p className="texto-bold texto-branco">Santos Baterias © {new Date().getFullYear()} - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Rodape;
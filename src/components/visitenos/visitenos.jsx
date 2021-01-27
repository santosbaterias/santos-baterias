import React from "react";

//CSS
import "./visitenos.css";

const VisiteNos = () => {
    return (
        <section id="visitenos" className="container-wd">
            <h1 className="titulo texto-preto">Visite-nos</h1>
            <p className="texto-bold texto-preto endereco">
                Av.Pinhal, 1169<br/>
                Vila Camilópolis, Santo André - SP<br/>
                CEP: 09240-021
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58483.20305579375!2d-46.49578919368926!3d-23.633000677422814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f95a9e5ed315aca!2sFeitosa%20Baterias%20-%20Camil%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1606075414333!5m2!1spt-BR!2sbr" loading="lazy" title="Clique e seja redirecionado para o nosso endereço no Google Maps! :)"></iframe>
        </section>
    )
}

export default VisiteNos;
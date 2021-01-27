import React from "react";

//CSS
import "./contato.css";

const Contato = () => {
    return (
        <section id="contato" className="container-wd">
            <h1 className="titulo texto-preto">Contato</h1>
            <ul>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5511983164019&text=Olá!%20Gostaria%20de%20..." target="blank" className="texto-preto"><i className="fab fa-whatsapp"></i>Disk entrega:<br></br>(11) 98316-4019</a>
                </li>
                <li>
                    <a href="tel:1149766870" target="blank" className="texto-preto"><i class="fas fa-phone-alt"></i>(11) 4976-6870</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/andre.luizdossantos.3701" target="blank" className="texto-preto"><i className="fab fa-facebook"></i>André Santos</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/feitosabaterias?r=nametag" target="blank" className="texto-preto"><i className="fab fa-instagram"></i>@feitosabaterias</a>
                </li>
            </ul>
        </section>
    )
}

export default Contato;
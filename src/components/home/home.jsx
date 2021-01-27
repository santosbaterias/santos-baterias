import React from "react";
import Typing from 'react-typing-animation';

//CSS
import "./home.css";

const HomeComponent = () => {
    return (
        <div id="home" className="banner">
            <div className="container-wd home">
                <Typing hideCursor={true}>
                    <h1 className="titulo texto-branco">Qualidade e preço bom é aqui!</h1>
                </Typing>
                <a href="#produtos"><button className="texto-bold texto-branco"><i className="fas fa-angle-down"></i> Ver produtos</button></a>
            </div>
        </div>
    )
}

export default HomeComponent;
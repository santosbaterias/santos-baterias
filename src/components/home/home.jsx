import React from "react";
import Typing from 'react-typing-animation';
import {Link} from "react-scroll";

//CSS
import "./home.css";

const HomeComponent = () => {
    return (
        <div id="home" className="banner">
            <div className="container-wd home">
                <Typing hideCursor={true}>
                    <h1 className="titulo texto-preto">Qualidade e preço bom é aqui!</h1>
                </Typing>
                <Link to="produtos" smooth={true} duration={500}><a href="#produtos"><button className="texto-bold texto-preto"><i className="fas fa-angle-down"></i> Ver produtos</button></a></Link>
            </div>
        </div>
    )
}

export default HomeComponent;
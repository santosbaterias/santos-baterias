import React, {useState, useEffect} from "react";

//CSS
import "./produtos.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {db} from "../../utils/constants";

//[Imagem]
//[Marca]
//Bateria [Amperagem]Ah - [Tempo] de garantia
//[Preço]
//[qtd]x de [preço/qtd]

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1025
        },
        items: 5,
        partialVisibilityGutter: 40
    },
    laptop: {
        breakpoint: {
            max: 1024,
            min: 769
        },
        items: 4.5,
        partialVisibilityGutter: 40
    },
    tabletS: {
        breakpoint: {
            max: 500,
            min: 426
        },
        items: 2.7
    },
    tabletM: {
        breakpoint: {
            max: 650,
            min: 501
        },
        items: 3.5
    },
    tabletL: {
        breakpoint: {
            max: 768,
            min: 651
        },
        items: 4.2
    },
    mobileS: {
        breakpoint: {
            max: 320,
            min: 0
        },
        items: 1.75
    },
    mobileM: {
        breakpoint: {
            max: 375,
            min: 321
        },
        items: 2.1
    },
    mobileL: {
        breakpoint: {
            max: 425,
            min: 376
        },
        items: 2.5
    }
}

const Produtos = () => {
    const [baterias, setBaterias] = useState([]);

    const [marca, setMarca] = useState("");
    const [tipo, setTipo] = useState("");

    let marcas=[];
    let tipos=[];

    useEffect(() => {
        listar();
    }, []);

    const listar = async () => {
        const result = (await db.collection("Baterias").get()).docs
        const data = result.map(documento => {
            return {
                id: documento.id,
                urlImagem: documento.data().urlImagem,
                marca: documento.data().marca,
                amperagem: documento.data().amperagem,
                mesesGarantia: documento.data().mesesGarantia,
                preco: documento.data().preco,
                parcelas: documento.data().parcelas,
                tipo: documento.data().tipo
            }
        });
        setBaterias(data);
    }

    return (
        <section id="produtos" className="container-wd">
            <h1 className="titulo texto-preto">Produtos</h1>
            <ul className="filtros">
                <li>
                    <label htmlFor="marca" className="texto-preto">Marca: </label>
                    <select name="marca" value={marca} onChange={event=>setMarca(event.target.value)}>
                        <option value="">Todas</option>
                        {
                            baterias
                            .sort(function (a, b) {
                                return (a.marca > b.marca) ? 1 : ((b.marca > a.marca) ? -1 : 0);
                            })
                            .map((bateria, index) => {
                                if(marcas.indexOf(bateria.marca)===-1) {
                                    marcas.push(bateria.marca);
                                    return <option value={bateria.marca} key={index}>{bateria.marca}</option>;
                                }
                            })
                        }
                    </select>
                </li>
                <li>
                    <label htmlFor="tipo" className="texto-preto">Tipo: </label>
                    <select name="tipo" value={tipo} onChange={event=>setTipo(event.target.value)}>
                        <option value="">Todos</option>
                        {
                            baterias
                            .sort(function (a, b) {
                                return (a.tipo > b.tipo) ? 1 : ((b.tipo > a.tipo) ? -1 : 0);
                            })
                            .map((bateria, index) => {
                                if(tipos.indexOf(bateria.tipo)===-1) {
                                    tipos.push(bateria.tipo);
                                    return <option value={bateria.tipo} key={index}>{bateria.tipo}</option>
                                }
                            })
                        }
                    </select>
                </li>
            </ul>
            <Carousel minimumTouchDrag={0} responsive={responsive} draggable={false}>
                {
                    baterias
                    .sort(function (a, b) {
                        return (a.marca > b.marca) ? 1 : ((b.marca > a.marca) ? -1 : 0);
                    })
                    .filter(marca===""&&tipo===""? bateria=>bateria.id!==-1 : marca===""&&tipo!==""? bateria=>bateria.tipo===tipo : marca!==""&&tipo===""? bateria=>bateria.marca===marca : marca!==""&&tipo!==""? bateria=>bateria.marca===marca&&bateria.tipo===tipo : "").map((bateria, index) => {
                        return (
                            <article key={index}>
                                <div>
                                    <div className="container-img" style={{backgroundImage: `url(${bateria.urlImagem})`, backgroundSize: "cover", backgroundPosition: "50% 50%"}}></div>
                                    <div className="dados-produto">
                                        <h1 className="texto-bold">{bateria.marca}</h1>
                                        <p className="texto-light descricao">Bateria {bateria.amperagem}Ah - {bateria.mesesGarantia} meses de garantia</p>
                                        <p className="texto-bold preco">R${bateria.preco}</p>
                                        <p className="texto-light">{bateria.parcelas}x de R${bateria.preco/bateria.parcelas}</p>
                                        <a href={`https://api.whatsapp.com/send?phone=5511983164019&text=Olá!%20Quero%20comprar%20a%20bateria%20${bateria.marca}%20${bateria.amperagem}Ah.`}><button>Comprar</button></a>
                                    </div>
                                </div>
                            </article>
                        );
                    })
                }
            </Carousel>
        </section>
    )
}

export default Produtos;
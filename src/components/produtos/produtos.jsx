import React, {useState, useEffect} from "react";

//CSS
import "./produtos.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {db} from "../../utils/constants";

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1025
        },
        items: 2.9,
        partialVisibilityGutter: 40
    },
    laptop: {
        breakpoint: {
            max: 1024,
            min: 769
        },
        items: 2.6,
        partialVisibilityGutter: 40
    },
    tabletS: {
        breakpoint: {
            max: 500,
            min: 426
        },
        items: 1.9
    },
    tabletM: {
        breakpoint: {
            max: 650,
            min: 501
        },
        items: 2.2
    },
    tabletL: {
        breakpoint: {
            max: 768,
            min: 651
        },
        items: 2.4
    },
    mobileS: {
        breakpoint: {
            max: 320,
            min: 0
        },
        items: 1.2
    },
    mobileM: {
        breakpoint: {
            max: 375,
            min: 321
        },
        items: 1.5
    },
    mobileL: {
        breakpoint: {
            max: 425,
            min: 376
        },
        items: 1.7
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
                tipo: documento.data().tipo,
                ativo: documento.data().ativo
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
                                if(bateria.ativo) {
                                    if(marcas.indexOf(bateria.marca)===-1) {
                                        marcas.push(bateria.marca);
                                        return <option value={bateria.marca} key={index}>{bateria.marca}</option>;
                                    }
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
                                if(bateria.ativo) {
                                    if(tipos.indexOf(bateria.tipo)===-1) {
                                        tipos.push(bateria.tipo);
                                        return <option value={bateria.tipo} key={index}>{bateria.tipo}</option>
                                    }
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
                        if(bateria.ativo)
                            return (
                                <article key={index} style={{marginRight: 30}}>
                                    <div>
                                        <div className="container-img" style={{backgroundImage: `url(${bateria.urlImagem})`, backgroundSize: "cover", backgroundPosition: "50% 50%"}}></div>
                                        <div className="dados-produto">
                                            <h1 className="texto-bold">{bateria.marca}</h1>
                                            <p className="texto-light descricao">Bateria {bateria.amperagem}Ah - {bateria.mesesGarantia} meses de garantia</p>
                                            <p className="texto-bold preco">R${Number(bateria.preco).toFixed(2)}</p>
                                            <p className="texto-light">à vista {(Number(bateria.preco)-20).toFixed(2)}{"\n"}</p>
                                            <p>ou...</p>
                                            <p className="texto-light">até {bateria.parcelas}x de R${Number(bateria.preco/bateria.parcelas).toFixed(2)} sem juros</p>
                                            <a href={`#/detalhes/${bateria.id}`}><button>Ver detalhes</button></a>
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
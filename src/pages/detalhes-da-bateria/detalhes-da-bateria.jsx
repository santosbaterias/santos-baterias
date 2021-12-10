import React, { useEffect, useState } from 'react';

import {db} from "../../utils/constants";

import Rodape from "../../components/rodape/rodape";
import Cabecalho from "../../components/cabecalho/cabecalho";
import { useParams } from 'react-router';

function DetalhesDaBateria() {
    const {idBateria} = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        listar();
    }, []);

    const listar = async () => {
        const result = await db.collection("Baterias").doc(idBateria).get();

        setData(result.data());
    }

    return (
        <>
            <Cabecalho inDetalhes={true} />
            <div className="container-wd">
                <h1 className="titulo" style={{ margin: 60 }}>Detalhes da bateria {data.marca} {data.amperagem}Ah</h1>
                <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap-reverse", alignItems: "center" }}>
                    <div style={{maxWidth: 500}}>
                        <p><span className="texto-bold">Marca:</span> {data.marca}</p><br></br>
                        <p><span className="texto-bold">Garantia:</span> {data.mesesGarantia} meses</p><br></br>
                        <p><span className="texto-bold">Amperagem:</span> {data.amperagem}Ah</p><br></br>
                        <p><span className="texto-bold">Tipo:</span> {data.tipo}</p><br></br>
                        {/* <p><span className="texto-bold">Preço total:</span> R${Number(data.preco).toFixed(2)}</p><br></br>
                        <p><span className="texto-bold">Preço à vista:</span> R${(Number(data.preco)-20).toFixed(2)}</p><br></br>
                        <p><span className="texto-bold">Preço parcelado:</span> até {data.parcelas}x de R${(Number(data.preco)/Number(data.parcelas)).toFixed(2)} sem juros</p><br></br> */}
                        <p><span className="texto-bold">Descrição:</span> {data.descricao}</p><br></br>
                    </div>
                    <div style={{ backgroundImage: `url(${data.urlImagem})`, width: "80vw", height: "80vw", maxWidth: "240px", maxHeight: "220px", margin: window.screen.width > 783 ? "" : "0 auto 60px auto", backgroundSize: "cover"}}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
                    <a href={`https://api.whatsapp.com/send?phone=5511983164019&text=Olá!%20Quero%20comprar%20a%20bateria%20${data.marca}%20${data.amperagem}Ah.`} target="_blank"><button style={{ cursor: "pointer", background: "#191E74", borderRadius: 10, color: "white", boxShadow: "none", border: "none", padding: 10, width: 100, display: "flex", justifyContent: "center" }}>Comprar</button></a>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default DetalhesDaBateria;
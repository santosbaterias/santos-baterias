import React from "react";

//Components
import Cabecalho from "../../components/cabecalho/cabecalho";
import HomeComponent from "../../components/home/home";
import Produtos from "../../components/produtos/produtos";
import QuemSomos from "../../components/quemsomos/quemsomos";
import VisiteNos from "../../components/visitenos/visitenos";
import Contato from "../../components/contato/contato";
import Rodape from "../../components/rodape/rodape";

const Home = () => {
    return (
        <>
            <Cabecalho/>
            <main>
                <HomeComponent/>
                <Produtos/>
                <QuemSomos/>
                <VisiteNos/>
                <Contato/>
            </main>
            <Rodape/>
        </>
    )
}

export default Home;
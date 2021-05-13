import React from "react";
import { Link } from "react-router-dom";
import Button from "../../core/components/Button";
import "./styles.scss";

const Home = () => {
    return (
        <div className="row">
            <div className="col-5 offset-1 container">
                <div className="title">
                    <h1>Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
                </div>
                <div className="descritive">
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
                    <br /> Favor observar as instruções passadas no capítulo
                    sobre a elaboração deste projeto. <br /> Este design foi
                    adaptado a partir de Ant Design System for Figma, de Mateusz
                    Wierzbicki:
                    <span>antforfigma@gmail.com</span>
                </div>
                <Link to="/search">
                    <Button text={"Começar"} />
                </Link>
            </div>
        </div>
    );
};

export default Home;

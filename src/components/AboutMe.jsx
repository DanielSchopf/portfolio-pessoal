import React from "react";
import AboutMeImage from "../../public/images/AboutMe-Image.png";
import './styles/AboutMe.css';

function AboutMe () {

    return (
        <section id="sobre" className="sobre-mim">
            <div className="sobre-mim-cont">
                <div className="sobre-mim-img">
                    <img src={AboutMeImage} alt="Imagem Pessoal"/>            
                </div>
                <div className="sobre-mim-texto">
                    <h2>Sobre Mim</h2>
                    <p>
                        Olá, eu sou o Daniel Schopf, um admirador da tecnologia, atualmente atuando como web developer e aluno de graduação de Sistemas de Informação. Minha paixão por computação e tecnologia começou aos 7 anos de idade, quando tive meu primeiro contanto com um computador. Naquela época, eu pensava somente em procurar jogos na internet, mas conforme o tempo foi passando eu comecei a admirar e querer entender como aquela "caixa preta" em minha mesa era capaz de fazer tantas coisas incríveis.
                    </p>
                    <p>
                    Desde então procuro satisfazer a curiosidade daquele pequeno Daniel buscando desenvolver e aprimorar os conhecimentos do meu eu atual.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
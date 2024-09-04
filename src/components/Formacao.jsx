import React from "react";
import './styles/Formacao.css';
import FormacaoImage from '../../public/images/formacao-image.jpg';
function Formacao () {

    return (
        <section id="formacao" className="formacao">
            <div className="formacao-cont">
                <div className="formacao-img">
                    <img src={FormacaoImage} alt="Imagem UFSM"/>
                </div>
                <div className="formacao-texto">
                    <h2 className="curso-acad">Formação Acadêmica</h2>
                    <p>
                    Atualmente, estou cursando o 5º semestre de Sistemas de Informação na Universidade Federal de Santa Maria (UFSM). Ao longo do curso, adquiri conhecimentos fundamentais que contribuíram significativamente para o meu desenvolvimento pessoal e profissional. As disciplinas teóricas e práticas permitiram explorar diversas áreas da computação, como desenvolvimento de software, bancos de dados, organização e arquitetura de computadores, entre outras.
                    </p>
                    <p>
                    Nesse período, tive a oportunidade de trabalhar com linguagens como C, Python, Java e SQL, além de utilizar frameworks como Django e libGDX, que reforçaram minha experiência em desenvolvimento e construção de aplicações.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Formacao
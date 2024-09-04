import React from "react";
import './styles/CursoExtra.css';

import bdIcon from '../../public/images/bd-image.png';
import feIcon from '../../public/images/fe-image.png';
import beIcon from '../../public/images/be-image.png';
import maIcon from '../../public/images/ma-image.png';
function CursoExtra() {
    return (
        <section className="formacao-extra">
            <div className="formacaoextra-cont">
                <div className="formacao-texto">
                    <h2 className="curso-extra">Curso Extracurricular</h2>
                    <p>
                        Além do curso de graduação, atualmente também estou participando de um curso extracurricular proporcionado pela +PraTi com o objetivo de qualificação para o desenvolvimento web full-stack. 
                        <a href="https://curso.maisprati.com.br" className="curso-link" target="_blank"> Mais detalhes sobre o curso aqui.</a>
                    </p>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <img src={feIcon} alt="FrontEnd" className="card-image" />
                        <h3 className="card-title">FrontEnd</h3>
                        <p className="card-content">
                            Fundamentos, conceitos avançados e boas práticas com javascript além do desenvolvimento de interfaces utilizando React.
                        </p>
                    </div>
                    <div className="card">
                        <img src={beIcon} alt="BackEnd" className="card-image" />
                        <h3 className="card-title">BackEnd</h3>
                        <p className="card-content">
                            Programação orientada a objetos com java, criação e integração de API's e desenvolvimento de API's rest com Spring Boot.
                        </p>
                    </div>
                    <div className="card">
                        <img src={bdIcon} alt="Banco de Dados" className="card-image" />
                        <h3 className="card-title">Banco de Dados</h3>
                        <p className="card-content">
                            Fundamentos de bancos de dados relacionais e não relacionais, modelagem e consulta de dados.
                        </p>
                    </div>
                    <div className="card">
                        <img src={maIcon} alt="Métodos Ágeis e Testes" className="card-image" />
                        <h3 className="card-title">Métodos Ágeis e Testes</h3>
                        <p className="card-content">
                            Testes com Jest unitários e de integração e desenvolvimento de software através de métodos ágeis como Scrum e Kanban.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CursoExtra;

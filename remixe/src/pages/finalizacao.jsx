import Styles from '../components/css/finalizacao.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Seta from '../assets/seta.png'
import barras from '../assets/barras.svg'
import documento from '../assets/documento.svg'
import foto from '../assets/foto.svg'
import seta_youtube from '../assets/seta_youtube.svg'
import yes from '../assets/yes.svg'


function Finalizacao(){
    return(
        <div className={Styles.fundao}>
             <div className={Styles.fundo}>
                <div className={Styles.header_separacao}>
                    <Header />
                </div>       
                <div className={Styles.conteudo}>
                    <div className={Styles.titulo_curso}>
                        <p>Cursos</p>
                        <img className={Styles.seta} src={Seta} alt="" />
                        <p className={Styles.texto_preto}>Novo Curso</p>

                    </div>
                    <div className={Styles.etapas}>
                        <div className={Styles.etapas_ajuste}>
                            <div className={Styles.circulo_verde}>
                                ✔
                            </div>
                            <p className={Styles.texto_preto}>informações</p>
                            <div className={Styles.linha1}></div>
                            <div className={Styles.circulo_verde}>
                                ✔
                            </div>
                            <p className={Styles.texto_preto}>Conteúdo</p>
                            <div className={Styles.linha2}></div>
                            <div className={Styles.circulo_verde}>
                                3
                            </div>
                            <p className={Styles.texto_preto}>Finalizar</p>
                        </div>
                    </div>
                    <div className={Styles.dados_curso}>
                        <div className={Styles.dados_caixa1}>
                            <div className={Styles.dados_ajuste}>
                                <div className={Styles.titulo_dados}>
                                    <div className={Styles.verde}></div>
                                    <p>Acesso ao curso</p>
                                </div>
                                <div className={Styles.ajuste_radius}>
                                    <input className={Styles.radius} type="radio" name="curso" id="html"></input>
                                    <p>Público</p>
                                </div>
                                <div className={Styles.ajuste_radius}>
                                    <input className={Styles.radius} type="radio" name="curso" id="html"></input>
                                    <p>Usuários selecionados</p>
                                </div>

                                <div className={Styles.linha}></div>

                                <div className={Styles.titulo_dados}>
                                    <div className={Styles.verde}></div>
                                    <p>Progresso</p>
                                </div>

                                <div className={Styles.selecionar}>
                                    <p>Salvar progresso automaticamente</p>
                                        <label className={Styles.botao_selecionar}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={Styles.slider}>
                                            <span className={Styles.check}>✓</span>
                                        </span>
                                    </label>
                                </div>
                                <div className={Styles.selecionar}>
                                    <p>Permitir continuar onde parou</p>
                                        <label className={Styles.botao_selecionar}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={Styles.slider}>
                                            <span className={Styles.check}>✓</span>
                                        </span>
                                    </label>
                                </div>

                                <div className={Styles.linha}></div>

                                <div className={Styles.titulo_dados}>
                                    <div className={Styles.verde}></div>
                                    <p>Certificado</p>
                                </div>

                               <div className={Styles.selecionar}>
                                    <p>Emitir certificado ao concluir</p>
                                        <label className={Styles.botao_selecionar}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={Styles.slider}>
                                            <span className={Styles.check}>✓</span>
                                        </span>
                                    </label>
                                </div>

                                <p className={Styles.ajuste_p}>Nota minima de aprovação</p>
                                <input className={Styles.input_ajuste} type="number" placeholder="70" />
                            </div>
                            
                        </div>
                        <div className={Styles.dados_caixa2}>
                           
                            <div className={Styles.dados_ajuste}>
                                <div className={Styles.titulo_dados}>
                                    <div className={Styles.verde}></div>
                                    <p>Tentativas no Quiz</p>
                                </div>
                                                                
                                <input className={Styles.input_ajuste} type="number" placeholder="3" />
                                
                                <div className={Styles.linha}></div>

                                <div className={Styles.titulo_dados}>
                                    <div className={Styles.verde}></div>
                                    <p>Conclusão do curso</p>
                                </div>

                                <div className={Styles.ajuste_radius}>
                                    <input className={Styles.radius} type="radio" name="teste" id="teste"></input>
                                    <p>Completar todas as aulas</p>
                                </div>
                                <div className={Styles.ajuste_radius}>
                                    <input className={Styles.radius} type="radio" name="teste" id="teste"></input>
                                    <p>Completar avaliações</p>
                                </div>

                                <div className={Styles.linha}></div>

                                <div className={Styles.titulo_dados}>
                                    <div className={Styles.verde}></div>
                                    <p>Publicação</p>
                                </div>

                                <div className={Styles.ajuste_radius}>
                                    <input className={Styles.radius} type="radio" name="publicacao" id="publicacao"></input>
                                    <p>Rascunho</p>
                                </div>
                                <div className={Styles.ajuste_radius}>
                                    <input className={Styles.radius} type="radio" name="publicacao" id="publicacao"></input>
                                    <p>Públicar imediatamente</p>
                                </div>

                                
                            </div>

                        </div>
                    </div>
                    <div className={Styles.finalizacao}>
                        <div className={Styles.ajuste}>
                            <a href="" className={Styles.botao_voltar}>Voltar para a página anterior</a>
                            <a href="" className={Styles.botao_avancar}>Publicar curso ➔</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Finalizacao
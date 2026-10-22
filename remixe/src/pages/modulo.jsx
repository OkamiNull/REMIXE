import Styles from '../components/css/modulo.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Seta from '../assets/seta.png'
import { Link } from 'react-router-dom'

function Modulo(){
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
                                2
                            </div>
                            <p className={Styles.texto_preto}>Conteúdo</p>
                            <div className={Styles.linha2}></div>
                            <div className={Styles.circulo}>
                                3
                            </div>
                            <p>Finalizar</p>
                        </div>
                    </div>
                    <div className={Styles.dados_curso}>
                        <div className={Styles.dados_caixa1}>
                            <div className={Styles.ajuste_caixa1}>
                               
                            </div>
                        </div>
                        <div className={Styles.dados_caixa2}>
                            <div className={Styles.adicao_modulo}>
                                <div className={Styles.ajuste_modulo}>
                                    <p className={Styles.mais}>+</p>
                                    <p>Módulo</p>
                                </div>
                                <div className={Styles.linha_fina}></div>
                                 <div className={Styles.ajuste_modulo}>
                                    <p className={Styles.mais}>+</p>
                                    <p>Tópico</p>
                                </div>
                                <div className={Styles.linha_fina}></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className={Styles.finalizacao}>
                        <div className={Styles.ajuste}>
                            <Link to="/Informacoes" className={Styles.botao_voltar}>Voltar para a página anterior</Link>
                            <Link to="/Finalizacao" className={Styles.botao_avancar}>Avançar ➔</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Modulo
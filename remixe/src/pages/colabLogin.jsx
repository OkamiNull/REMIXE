import Style from "../components/css/colabLogin.module.css";
import { Link } from "react-router-dom";

import background from "../assets/Background.png";
import iconePortal from "../assets/icone-portal.png";
import LoginHeader from "../components/loginHeader";
import FooterLogin from "../components/loginFooter";
 

function ColabLogin() {
    return(
        <div className={Style.colabLogingPage}>
            <LoginHeader/>
 
            <div className={Style.content}>
                <section className={Style.secaoPrincipal}>
                    <div className={Style.textRemixe}>
                        <p className={Style.tituloPrincipal}>
                            Sua jornada técnica <br />
                            adaptativa{" "}
                        <span className={Style.destaqueTitulo}>molda-se a</span>
                        <span className={Style.destaqueTitulo2}>o seu raciocínio.</span>
                        </p>
                        <p className={Style.subtituloPrincipal}>
                            A atmosfera de aprendizagem que converte qualquer conteúdo em tempo <br />
                            real:{" "}
                        <span className={Style.destaqueSubtitulo}>
                            alterne entre Slides, Vídeos Gerativos, <br />
                            Desafios Gamificados ou PDFs.
                        </span>
                        </p>
                    </div>

                    <section className={Style.cardsExemplo}>
                        <div className={Style.navExemplo}>
                        <button type="button" className={Style.navitemAtivo}>PDF</button>
                        <button type="button" className={Style.navItem}>Vídeo Gerativo</button>
                        <button type="button" className={Style.navItem}>Slides Interativos</button>
                        <button type="button" className={Style.navItem}>Gamificação</button>
                        </div>
                
                        <div className={Style.cardMetrica}>
                        <p className={Style.metricaValidacao}>SEQUÊNCIA ATUAL</p>
                        <p className={Style.valorMetrica}>94.8%</p>
                        <p className={Style.descricaoMetrica}>Índice de Retenção Ativa</p>
                        </div>
                
                        <div className={Style.retornoPai}>
                        <div className={Style.imgIA}>
                            <img src={background} alt="Símbolo de IA" />
                        </div>
                        <div className={Style.retornoFilho}>
                            <p className={Style.retornoSucesso}>Módulo Re-mixado com Sucesso!</p>
                            <p className={Style.descricaoRetorno}>1 hora de vídeo-aula → Manual de 30 páginas</p>
                        </div>
                        </div>
                    </section>
                </section>
            
                
                
            
                
                <section className={Style.secaoLogin}>
                    <div className={Style.cardLogin}>
            
                    <div className={Style.portalTitulo}>
                        <img className={Style.iconePortal} src={iconePortal} alt="" />
                        <p className={Style.textoPortal}>Portal do Colaborador</p>
                    </div>
            
                    <h1 className={Style.loginTitulo}>Acesse sua conta</h1>
                    <p className={Style.loginSubtitulo}>
                        Entre com seu e-mail corporativo ou credenciais da sua organização.
                    </p>
            
                    <div className={Style.loginRapido}>
                        <button type="button" className={Style.googleLogin}>
                        <span aria-hidden="true">G</span> Google Workspace
                        </button>
                        <button type="button" className={Style.azureLogin}>
                        Azure AD / Okta
                        </button>
                    </div>
            
                    <div className={Style.loginAdicional}>
                        <span>OU CONTINUE COM E-MAIL CORPORATIVO</span>
                    </div>
            
                    {/* onSubmit evita recarregar a página; troque pela autenticação depois */}
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={Style.grupoFormulario}>
                        <label htmlFor="email" className={Style.labelFormulario}>
                            E-mail corporativo institucional
                        </label>
                        <div className={Style.formularioInput}>
                            <input
                            id="email"
                            type="email"
                            className={Style.formInput}
                            placeholder="nome@suaempresa.com.br"
                            autoComplete="email"
                            required
                            />
                        </div>
                        </div>
            
                        <div className={Style.grupoFormulario}>
                        <label htmlFor="senha" className={Style.labelFormulario}>
                            Senha de acesso
                        </label>
                        <div className={Style.formularioInput}>
                            <input
                            id="senha"
                            type="password"
                            className={Style.formInput}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            required
                            />
                        </div>
                        </div>
            
                        <div className={Style.formBanco}>
                        <label className={Style.formMemoria}>
                            <input type="checkbox" /> Lembrar neste dispositivo corporativo
                        </label>
                        <Link to="/recuperar-senha" className={Style.senhaEsquecida}>
                            Esqueceu a senha?
                        </Link>
                        </div>
            
                        <button type="submit" className={Style.acessarPlataforma}>
                        Acessar Plataforma &rarr;
                        </button>
                    </form>
                    </div>
                </section>
            
            </div>
            <FooterLogin/>
        </div>
    )
}

export default ColabLogin
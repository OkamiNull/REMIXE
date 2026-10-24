import Style from "../components/css/colabLogin.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/Remixe_icon.png";
import iconeSuporte from "../assets/icone-suporte.png";
import background from "../assets/Background.png";
import iconePortal from "../assets/icone-portal.png";
 

function ColabLogin() {
    return(
        <div className={Style.colabLogingPage}>
            <header className={Style.header}>
                <div className={Style.headerMarca}>
                    <img className={Style.logoimg} src={logo} alt="Logo REMIXE" />
                    <span className={Style.logo}>REMIXE</span>
                </div>
        
                <nav className={Style.navHeader}>
                    <div className={Style.seletorPortais}>
                        <Link to="/" className={Style.navitemAtivo}>Portal do Colaborador</Link>
                    </div>
                    <Link to="/" className={Style.navItem}>Portal da Empresa</Link>
                </nav>
        
                <div className={Style.suporte}>
                    <img className={Style.iconeSuporte} src={iconeSuporte} alt="" />
                    <p className={Style.textoSuporte}>Suporte</p>
                </div>
            </header>
 
            <div className={Style.content}>
                <section className={Style.secaoPrincipal}>
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
                </section>
            
                
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
                        <span aria-hidden="true">🪟</span> Azure AD / Okta
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
                            <span className={Style.iconeInput} aria-hidden="true">✉️</span>
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
                            <span className={Style.iconeInput} aria-hidden="true">🔒</span>
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
            
                    <div className={Style.cardRodape}>
                        <Link to="/contato-gestor">É gestor de RH, DPO ou Tech Lead?</Link>
                        <Link to="/">Portal da Empresa &nearr;</Link>
                    </div>
            
                    </div>
                </section>
            
                <footer className={Style.footer}>
                    <Link to="/politica-de-seguranca">Política de Segurança da Informação</Link>
                </footer>
            </div>
        </div>
    )
}

export default ColabLogin
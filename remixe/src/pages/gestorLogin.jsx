
import Style from "../components/css/loginCompany.module.css";
import { Link } from "react-router-dom";
import FooterLogin from "../components/loginFooter";
import LoginHeader from "../components/loginHeader";



function GestorLogin() {
  return (
    <div className={Style.loginCompanyPage}>

    <LoginHeader/>
      

    
      <div className={Style.principal}>

       
        <section className={Style.conteudoEsquerda}>
          <h1 className={Style.tituloPrincipal}>
            Reduza o turnover <br />
            técnico a zero com{" "}
            <span className={Style.textoAzul}>IA <br /></span>{" "}
            <span className={Style.textoVerde}>Adaptativa</span>
          </h1>
          <p className={Style.descricaoPrincipal}>
            Painel de métricas com acessos por curso, usuários logados,
            porcentagem de conclusão geral e individual dos colaboradores,
            porcentagem de tempo de permanência em módulos e mais.
          </p>

          <div className={Style.cartaoVitrine}>
            <div className={Style.vitrineTopo} aria-hidden="true">
              <span className={`${Style.ponto} ${Style.vermelho}`} />
              <span className={`${Style.ponto} ${Style.amarelo}`} />
              <span className={`${Style.ponto} ${Style.verde}`} />
            </div>

            <div className={Style.vitrineGrid}>
            
              <div className={Style.blocoMetrica}>
                <div className={Style.metricaCabecalho}>
                  <span>ROI</span>
                </div>
                <div className={Style.metricaValor}>Garantido</div>
              </div>

              <div className={Style.blocoMetrica}>
                <div className={Style.metricaCabecalho}>
                  <span>RETENÇÃO ATIVA</span>
                </div>
                <div className={Style.metricaValor}>94.2%</div>
                <div className={Style.metricaRodape}>
                  <span className={Style.textoVerde}>+18.4%</span> vs. Média do Setor Tech
                </div>
              </div>

              <div className={Style.blocoMetrica}>
                <div className={Style.metricaCabecalho}>
                  <span>PREDIÇÃO DE EVASÃO</span>
                </div>
                <div className={`${Style.metricaValor} ${Style.textoVerdeEscuro}`}>Ativa</div>
                <div className={Style.metricaRodape}>
                  <span className={Style.textoVerde}>+0.04%</span> Falso Positive
                </div>
              </div>
            </div>

            <div className={Style.vitrineBarra}>
              <div className={Style.barraIcone} aria-hidden="true"></div>
              <div className={Style.barraInfo}>
                <strong>Transformação Dinâmica de Formato</strong>
                <span>Conteúdo inexcedível para garantir o bom desempenho.</span>
              </div>
              <div className={Style.barraTags}>
                <span className={Style.tagPequena}>PDF → Slide</span>
                <span className={Style.tagPequena}>Doc → Vídeo IA</span>
              </div>
            </div>
          </div>
        </section>

       
        <section className={Style.conteudoDireita}>
          <div className={Style.cartaoLogin}>
            <div className={Style.loginTopoInfo}>
              <span className={Style.badgeCinza}>CONSOLE ADMINISTRATIVO B2B</span>
              <span className={Style.textoPequenoCinza}>ID: REM-CORP-SYS</span>
            </div>

            <h2 className={Style.loginTitulo}>Login de Empresas</h2>
            <p className={Style.loginSubtitulo}>
              Gerencie trilhas, métricas de evasão e licenças corporativas da REMIXE.
            </p>

           

            <div className={Style.divisorLinha}>
              <span>LOGIN</span>
            </div>

           
            <form className="Style.loginForm" onSubmit={(e) => e.preventDefault()}>
              <div className={Style.grupoInput}>
                <label htmlFor="dominio">Domínio ou Subdomínio Corporativo</label>
                <div className={Style.inputComIcone}>
                  <input id="dominio" type="text" defaultValue="fintech-core" />
                  <span className={Style.sufixoInput}>.remixe</span>
                </div>
              </div>

              <div className={Style.grupoInput}>
                <label htmlFor="email">E-mail corporativo institucional</label>
                <div className={Style.inputComIcone}>
                  <input
                    id="email"
                    type="email"
                    defaultValue="diretoria.rh@empresa.com.br"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className={Style.grupoInput}>
                <div className={Style.labelComLink}>
                  <label htmlFor="senha">Senha de Administrador</label>
                  <Link to="/recuperar-senha">Esqueceu sua senha corporativa?</Link>
                </div>
                <div className={Style.inputComIcone}>
                  <input
                    id="senha"
                    type="password"
                    placeholder="••••••••••••••"
                    autoComplete="current-password"
                    required
                  />
              
                  <button type="button" className={Style.sufixoOlho} aria-label="Mostrar senha"></button>
                </div>
              </div>

              <div className={Style.linhaCheck}>
                <label className={Style.checkLabel}>
                  <input type="checkbox" defaultChecked /> Manter conectado por 30 dias
                </label>
                <span className={Style.badgeVerdeClaro}>MFA Enforced</span>
              </div>

              <button type="submit" className={Style.botaoEntrar}>
                Entrar no Painel do Gestor →
              </button>
            </form>

            <div className={Style.loginRodapeLinks}>
              <div className={Style.linkLinha1}>
                <span>Sua empresa ainda não tem conta? </span>
                <Link to="/CadastroEmpresa" className={Style.linkVerde}>Cadastrar Empresa</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

     <FooterLogin/>

    </div>
  );
}

export default GestorLogin;
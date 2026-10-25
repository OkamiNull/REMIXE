import { Link } from "react-router-dom";
import Style from "../components/css/loginCompany.module.css";


import logo from "../assets/Remixe_icon.png";
import iconeSuporte from "../assets/icone-suporte.png";


function GestorLogin() {
  return (
    <div className={Style.loginCompanyPage}>

  
      <header className={Style.header}>
        <div className={Style.headerMarca}>
          <img className={Style.logoimg} src={logo} alt="Logo REMIXE" />
          <span className={Style.logo}>REMIXE</span>
        </div>

        <nav className={Style.navHeader}>
          <div className={Style.seletorPortais}>
            <Link to="/Login-collab" className={Style.navItem}>Portal do Colaborador</Link>
          </div>
          <Link to="/Login-gestor" className={Style.navitemAtivo}>Portal da Empresa</Link>
        </nav>

        
      </header>

    
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
                  <span className={Style.iconeSeta} aria-hidden="true">↗</span>
                </div>
                <div className={Style.metricaValor}>Garantido</div>
              </div>

              <div className={Style.blocoMetrica}>
                <div className={Style.metricaCabecalho}>
                  <span>RETENÇÃO ATIVA</span>
                  <span className={Style.iconeGrafico} aria-hidden="true">📊</span>
                </div>
                <div className={Style.metricaValor}>94.2%</div>
                <div className={Style.metricaRodape}>
                  <span className={Style.textoVerde}>+18.4%</span> vs. Média do Setor Tech
                </div>
              </div>

              <div className={Style.blocoMetrica}>
                <div className={Style.metricaCabecalho}>
                  <span>PREDIÇÃO DE EVASÃO</span>
                  <span className={Style.iconeRede} aria-hidden="true">⚡</span>
                </div>
                <div className={`${Style.metricaValor} ${Style.textoVerdeEscuro}`}>Ativa</div>
                <div className={Style.metricaRodape}>
                  <span className={Style.textoVerde}>+0.04%</span> Falso Positive
                </div>
              </div>
            </div>

            <div className={Style.vitrineBarra}>
              <div className={Style.barraIcone} aria-hidden="true">⚙️</div>
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
              <span className={Style.badgeCinza}>⚙️ CONSOLE ADMINISTRATIVO B2B</span>
              <span className={Style.textoPequenoCinza}>ID: REM-CORP-SYS</span>
            </div>

            <h2 className={Style.loginTitulo}>Login de Empresas</h2>
            <p className={Style.loginSubtitulo}>
              Gerencie trilhas, métricas de evasão e licenças corporativas da REMIXE.
            </p>

            <button type="button" className={Style.botaoSso}>
              <span>Entrar via SSO Corporativo</span>
              <span className={Style.tagSso}>SAML / OKTA / AZURE AD</span>
            </button>

            <div className={Style.divisorLinha}>
              <span>OU AUTENTICAÇÃO DIRETA</span>
            </div>

           
            <form onSubmit={(e) => e.preventDefault()}>
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
              
                  <button type="button" className={Style.sufixoOlho} aria-label="Mostrar senha">👁️</button>
                </div>
              </div>

              <div className={Style.linhaCheck}>
                <label className={Style.checkLabel}>
                  <input type="checkbox" defaultChecked /> Manter conectado por 30 dias
                </label>
                <span className={Style.badgeVerdeClaro}>🛡️ MFA Enforced</span>
              </div>

              <button type="submit" className={Style.botaoEntrar}>
                Entrar no Painel do Gestor →
              </button>
            </form>

            <div className={Style.loginRodapeLinks}>
              <div className={Style.linkLinha1}>
                <span>Sua empresa ainda não tem conta?</span>
                <Link to="/cadastro-empresa" className={Style.linkVerde}>Cadastrar Empresa →</Link>
              </div>
              <div className={Style.linkLinha2}>
                <span className={Style.iconeAluno} aria-hidden="true">👤</span>
                <span>Você é aluno/colaborador?</span>
                <Link to="/login" className={Style.linkAzul}>ACESSE O PORTAL DO ALUNO →</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className={Style.rodapeInferior}>
        <div className={Style.rodapeConteudo}>
          <span>REMIXE Technologies Inc.</span>
          <span>© 2026 Plataforma de Aprendizagem Técnica Corporativa</span>
        </div>
        <div className={Style.rodapeLinks}>
          <Link to="/privacidade">Privacidade de Dados LGPD/GDPR</Link>
          <Link to="/termos">Termos de Serviço Corporativo</Link>
          <Link to="/status">Status da Infraestrutura</Link>
        </div>
      </footer>

    </div>
  );
}

export default GestorLogin;
import { Link } from "react-router-dom";
import Style from "../components/css/registerCompany.module.css";

import LoginHeader from "../components/loginHeader";
import FooterLogin from "../components/loginFooter";

function RegisterCompany() {
  return (
    <div className={Style.registerCompanyPage}>

      {/* FUTURO: <LoginHeader active="company" /> */}
      <LoginHeader/>

      {/* FUTURO: <SignupSteps current={1} /> (etapa atual vinda de useState) */}
      <section className={Style.secaoProgresso}>

        <ol className={Style.listaEtapas}>
          <li className={`${Style.etapa} ${Style.etapaAtiva}`}>
            <div className={Style.circuloEtapa}>1</div>
            <div className={Style.textosEtapa}>
              <span className={Style.numeroEtapa}>Passo 1 • Ativo</span>
              <span className={Style.nomeEtapa}>Dados da Empresa</span>
            </div>
          </li>
          <li className={Style.etapa}>
            <div className={Style.circuloEtapa}>2</div>
            <div className={Style.textosEtapa}>
              <span className={Style.numeroEtapa}>Passo 2</span>
              <span className={Style.nomeEtapa}>Perfil do Time</span>
            </div>
          </li>
          <li className={Style.etapa}>
            <div className={Style.circuloEtapa}>3</div>
            <div className={Style.textosEtapa}>
              <span className={Style.numeroEtapa}>Passo 3</span>
              <span className={Style.nomeEtapa}>Escolha do Plano</span>
            </div>
          </li>
        </ol>
      </section>

      {/* div e não <main>: o App.jsx já envolve as rotas em <main> */}
      <div className={Style.principal}>

        {/* FUTURO: <WhyRemixe /> */}
        <section className={Style.conteudoEsquerdo}>
          <h1 className={Style.tituloPrincipal}>
            Por que você deveria confiar na{" "}
            <span className={Style.destaqueTitulo}>REMIXE?</span>
          </h1>
          <p className={Style.subtituloDestaque}>
            Transforme conteúdos técnicos em trilhas interativas de alta
            retenção calibradas em tempo real por IA.
          </p>

          <article className={Style.cartaoInfo}>
            <div className={Style.cabecalhoCartaoInfo}>
              <h2 className={Style.tituloCartaoInfo}>Métricas Consolidadas</h2>
              <span className={Style.etiquetaRetencao}>+48% Retenção</span>
            </div>
            <div className={Style.gradeNumeros}>
              {/* FUTURO: <NumberBlock /> (repete para cada métrica) */}
              <div className={Style.blocoNumero}>
                <span className={Style.valorNumero}>3.8x</span>
                <span className={Style.legendaNumero}>Velocidade Ramp-Up</span>
              </div>
              <div className={Style.blocoNumero}>
                <span className={`${Style.valorNumero} ${Style.verde}`}>89%</span>
                <span className={Style.legendaNumero}>Taxa de Conclusão</span>
              </div>
              <div className={Style.blocoNumero}>
                <span className={`${Style.valorNumero} ${Style.azul}`}>0 min</span>
                <span className={Style.legendaNumero}>Setup Manual</span>
              </div>
            </div>
          </article>

          {/* FUTURO: <FeatureCard /> (repete para cada recurso) */}
          <article className={`${Style.cartaoInfo} ${Style.linhaRecurso}`}>
            <div className={`${Style.iconeRecurso} ${Style.verdeClaro}`} aria-hidden="true"></div>
            <div className={Style.textoRecurso}>
              <h3>Trilhas multimodais adaptadas por IA</h3>
              <p>Gere resumos, alteração de didática, exemplificação e anotações.</p>
            </div>
          </article>

          <article className={`${Style.cartaoInfo} ${Style.linhaRecurso}`}>
            <div className={`${Style.iconeRecurso} ${Style.azulClaro}`} aria-hidden="true"></div>
            <div className={Style.textoRecurso}>
              <h3>Previsão preditiva de desengajamento</h3>
              <p>
                Identifique gargalos de aprendizagem e defasagens de stack antes
                que impactem a entrega das sprints críticas.
              </p>
            </div>
          </article>

          <article className={`${Style.cartaoInfo} ${Style.linhaRecurso}`}>
            <div className={`${Style.iconeRecurso} ${Style.cinzaClaro}`} aria-hidden="true"></div>
            <div className={Style.textoRecurso}>
              <h3>Suporte prioritário e integração LMS/HRIS</h3>
              <p>
                Conexão plug-and-play nativa com Workday, BambooHR, Slack,
                GitHub Enterprise, Okta e Azure AD.
              </p>
            </div>
          </article>
        </section>

        {/* FUTURO: <CompanySignupForm /> */}
        <section className={Style.conteudoDireito}>
          <span className={Style.etiquetaPequenaVerde}>● Cadastro Institucional</span>
          <h2 className={Style.tituloFormulario}>Cadastre sua Empresa na REMIXE</h2>
          <p className={Style.descricaoFormulario}>
            Comece a transformar a educação corporativa do seu time tech hoje.
            Configuração guiada em menos de 3 minutos.
          </p>

          {/* onSubmit evita recarregar a página; troque pelo envio real depois */}
          <form onSubmit={(e) => e.preventDefault()}>

            <div className={Style.grupoSecao}>
              <h3 className={Style.tituloGrupo}>
                <span className={Style.iconeGrupo} aria-hidden="true"></span> Identificação da Organização
              </h3>
              <div className={Style.linhaInputs}>
                {/* FUTURO: <FormField label icon type placeholder /> (repete em todos os campos) */}
                <div className={Style.caixaInput}>
                  <label htmlFor="razaoSocial">
                    Nome da Empresa / Razão Social <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <input id="razaoSocial" type="text" placeholder="Ex: Nubank Tecnologia S.A." autoComplete="organization" required />
                  </div>
                </div>
                <div className={Style.caixaInput}>
                  <label htmlFor="cnpj">
                    CNPJ / Identificador Fiscal <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <input id="cnpj" type="text" placeholder="00.000.000/0001-00" inputMode="numeric" required />
                  </div>
                </div>
              </div>
            </div>

            <div className={Style.grupoSecao}>
              <h3 className={Style.tituloGrupo}>
                <span className={Style.iconeGrupo} aria-hidden="true"></span> Responsável pela Conta
              </h3>
              <div className={Style.linhaInputs}>
                <div className={Style.caixaInput}>
                  <label htmlFor="nomeResponsavel">
                    Nome Completo <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <input id="nomeResponsavel" type="text" placeholder="Carlos Eduardo Silva" autoComplete="name" required />
                  </div>
                </div>
                <div className={Style.caixaInput}>
                  <label htmlFor="cargo">
                    Cargo na Empresa <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <input id="cargo" type="text" placeholder="Ex: Head de Engenharia, VP, L&D" autoComplete="organization-title" required />
                  </div>
                </div>
              </div>
              <div className={Style.linhaInputs}>
                <div className={Style.caixaInput}>
                  <label htmlFor="email">
                    E-mail Corporativo <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <input id="email" type="email" placeholder="carlos@suaempresa.com" autoComplete="email" required />
                  </div>
                </div>
                <div className={Style.caixaInput}>
                  <label htmlFor="telefone">
                    Telefone / WhatsApp Corporativo <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <input id="telefone" type="tel" placeholder="+55 (11) 98765-4321" autoComplete="tel" required />
                  </div>
                </div>
              </div>
            </div>

            <div className={Style.grupoSecao}>
              <h3 className={Style.tituloGrupo}>
                <span className={Style.iconeGrupo} aria-hidden="true"></span> Tamanho e Setor
              </h3>
              <div className={Style.linhaInputs}>
                <div className={Style.caixaInput}>
                  <label htmlFor="tamanho">
                    Tamanho da Empresa <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <select id="tamanho" defaultValue="" required>
                      <option value="" disabled>Selecione o total de colaboradores</option>
                      {/* FUTURO: opções vindas de uma lista (map) */}
                    </select>
                    <span className={Style.setaSelect} aria-hidden="true">▼</span>
                  </div>
                </div>
                <div className={Style.caixaInput}>
                  <label htmlFor="setor">
                    Setor / Segmento <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <select id="setor" defaultValue="" required>
                      <option value="" disabled>Selecione o setor principal</option>
                    </select>
                    <span className={Style.setaSelect} aria-hidden="true">▼</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={Style.grupoSecao}>
              <h3 className={Style.tituloGrupo}>
                <span className={Style.iconeGrupo} aria-hidden="true"></span> Credenciais de Acesso Mestre
              </h3>
              <div className={Style.linhaInputs}>
                <div className={Style.caixaInput}>
                  <label htmlFor="senha">
                    Senha Corporativa <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <input id="senha" type="password" placeholder="••••••••••••" autoComplete="new-password" required />
                    {/* FUTURO: alterna mostrar/ocultar senha (useState) */}
                    <button type="button" className={Style.botaoOlho} aria-label="Mostrar senha">👁</button>
                  </div>
                </div>
                <div className={Style.caixaInput}>
                  <label htmlFor="confirmarSenha">
                    Confirmar Senha <span className={Style.asterisco}>*</span>
                  </label>
                  <div className={Style.envolveInput}>
                    <span className={Style.iconeInput} aria-hidden="true"></span>
                    <input id="confirmarSenha" type="password" placeholder="••••••••••••" autoComplete="new-password" required />
                    <button type="button" className={Style.botaoOlho} aria-label="Mostrar senha">👁</button>
                  </div>
                </div>
              </div>

              {/* FUTURO: <PasswordStrength password={senha} /> */}
              <div className={Style.caixaForcaSenha}>
                <div className={Style.topoForca}>
                  <span className={Style.textoForca}>Força da Senha Institucional:</span>
                  <span className={Style.statusForca}>Insira uma senha</span>
                </div>
                <ul className={Style.listaRequisitos}>
                  <li className={Style.requisito}><span className={Style.marcadorRequisito} /> 8+ dígitos</li>
                  <li className={Style.requisito}><span className={Style.marcadorRequisito} /> Maiúsculas</li>
                  <li className={Style.requisito}><span className={Style.marcadorRequisito} /> Números</li>
                  <li className={Style.requisito}><span className={Style.marcadorRequisito} /> Especiais</li>
                </ul>
              </div>
            </div>

            <div className={Style.areaAceite}>
              <label className={Style.linhaAceite}>
                <input type="checkbox" required />
                <span className={Style.textoAceite}>
                  Concordo com os{" "}
                  <Link to="/termos" className={Style.linkVerde}>Termos de Serviço B2B</Link>{" "}
                  e a{" "}
                  <Link to="/privacidade" className={Style.linkVerde}>Política de Privacidade da REMIXE</Link>{" "}
                  sob padrões LGPD/GDPR.
                </span>
              </label>
              <label className={Style.linhaAceite}>
                <input type="checkbox" />
                <span className={Style.textoAceite}>
                  Desejo receber relatórios mensais e benchmarking de tendências
                  de capacitação técnica do mercado latino-americano.
                </span>
              </label>
            </div>

            <button type="submit" className={Style.botaoSubmeter}>
              <span aria-hidden="true"></span> Criar Conta Corporativa & Iniciar Avaliação →
            </button>

            <div className={Style.areaLogin}>
              Já possui conta corporativa?{" "}
              <Link to="/login-empresa" className={Style.linkVerde}>Fazer Login →</Link>
            </div>
          </form>
        </section>
      </div>

      {/* FUTURO: <LoginFooter /> */}
        <FooterLogin/>

    </div>
  );
}

export default RegisterCompany;
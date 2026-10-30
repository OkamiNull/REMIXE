import Style from "../components/css/loginFooter.module.css"
import { Link } from "react-router-dom"

function FooterLogin() {
    return(
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
      
    )    
}

export default FooterLogin
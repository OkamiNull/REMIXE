import Style from "../components/css/presentation.module.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import thumb from "../assets/pyThumb.jpg"
import clock from "../assets/time.png"
import check from "../assets/check.png"
import thunder from "../assets/thunder.png"
import book from "../assets/book.png"
import folder from "../assets/folder.png"

function Presentation() {
  return (
    <div className={Style.presentation}>
        <Header />
        <div className={Style.hero}>
            <div className={Style.heroContent}>
                <div className={Style.heroText}>

                    <h1 className={Style.heroTitle}>Python básico I</h1>
                    <p className={Style.heroDescription}>Python é uma linguagem de programação conhecida por sua simplicidade 
                    e facilidade de aprendizado. Ela é utilizada para criar sites, automatizar tarefas,
                    analisar dados e desenvolver inteligência artificial. Sua sintaxe simples permite que
                    iniciantes aprendam programação com mais facilidade.</p>
                </div>
                <button className={Style.ctaButton}>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <p className={Style.ctaButtonText}>Começe já</p>
                    </a>
                </button>
            </div>
            <div className={Style.heroImage}>
                <img src={thumb} alt="" />
            </div>
        </div>
        <div className={Style.courseStats}>

            <div className={Style.statBlock}>

                <div className={Style.statIcon}>
                    <img src={clock} alt="" />
                </div>
                <div className={Style.statText}>
                    <p className={Style.statValue}>120 horas</p>
                    <p className={Style.statLabel}>Carga horária total estimada</p>
                </div>
            </div>

            <div className={Style.statBlock}>
                <div className={`${Style.statIcon} ${Style.statIconGreen}`}>
                    <img src={check} alt="" />
                </div>
                <div className={Style.statText}>
                    <p className={Style.statValue}>Certificação</p>
                    <p className={Style.statLabel}>Certificado de que fez o curso</p>
                </div>

            </div>
            <div className={Style.statBlock}>

                
                <div className={`${Style.statIcon} ${Style.statIconRed}`}>
                    <img src={thunder} alt="" />
                </div>
                <div className={Style.statText}>
                    <p className={Style.statValue}>Iniciante</p>
                    <p className={Style.statLabel}>Nenhum pré-requisito técnico exigido</p>
                </div>

            </div>
        </div>

        <div className={Style.courseContent}>
            <div className={Style.aboutCourse}>
                <div className={Style.aboutText}>
                    <div className={Style.aboutTop}>
                        <div className={Style.bookIcon}>
                            <img src={book} alt="" />
                        </div>
                        <p className={Style.aboutValue}>Sobre o curso</p>
                    </div>
                    <p className={Style.aboutLabel}>Python é uma linguagem de programação versátil, utilizada no desenvolvimento de sistemas, automação de tarefas e inteligência artificial. Sua sintaxe simples facilita o aprendizado e permite criar projetos de diferentes níveis de complexidade.</p>
                </div>
                <button className={Style.ctaButton}>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <p className={Style.ctaButtonText}>Leia mais</p>
                    </a>
                </button>
            </div>

            <div className={Style.courseModules}>
                <div className={Style.modulesTop}>
                    <div className={Style.modulesText}>
                        <div className={Style.folderIcon}>
                            <img src={folder} alt="" />
                        </div>
                        <p className={Style.folderValue}>Módulos</p>
                    </div>

                    <div className={Style.moduleCounter}>
                            <p className={Style.moduleCount}>2 Módulos</p>
                    </div>
                </div>

                <div className={Style.moduleBox}>
                    
                    <div className={Style.moduleFrame}>
                        <p className={Style.moduleNumber}>01</p>
                    </div>

                    <div className={Style.moduleText}>
                        <p className={Style.moduleTitle}>Módulo 1: Python I</p>
                        <p className={Style.moduleSubtitle}>Fundamentos sobre python</p>
                    </div>

                </div>

                <div className={Style.moduleBox}>
                    
                    <div className={Style.moduleFrame}>
                        <p className={Style.moduleNumber}>02</p>
                    </div>

                    <div className={Style.moduleText}>
                        <p className={Style.moduleTitle}>Módulo 2: Python II</p>
                        <p className={Style.moduleSubtitle}>Aprofundamento sobre python</p>
                    </div>

                </div>
            </div>    
        </div>
      <Footer />
    </div>
  );
}

export default Presentation;
import Style from "../components/css/course.module.css"
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import pythonCover from "../assets/Placa-mãe gamer ROG Strix de alta tecnologia iluminada com circuitos integrados.png";

function Course() {
    return(
        <div className={Style.course}>
            <Header />
            <div className={Style.coursePage}>
                
                    <aside className={Style.courseSidebar}>
                        <div className={Style.sidebarHeader}>
                            <h2 className={Style.sidebarTitle}>Conteúdo do curso</h2>
                            <span className={Style.moduleCount}>3 Módulos</span>
                        </div>
                
                    
                        <details className={Style.moduleCard}>
                            <summary className={Style.moduleSummary}>
                                <span>Modulo 1: Python I</span>
                                <svg className={Style.chevron} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9l6 6 6-6" />
                                </svg>
                            </summary>
                        </details>
                
                        <details className={Style.moduleCard} open>
                            <summary className={Style.moduleSummary}>
                                <span>Modulo 2: Python II</span>
                                <svg className={Style.chevron} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9l6 6 6-6" />
                                </svg>
                            </summary>
                
                            <ul className={Style.lessonList}>
                                <li className={`${Style.lesson} ${Style.lessonCurrent}`}>
                                <span className={`${Style.lessonStatus} ${Style.lessonStatusDone}`} />
                                <span className={Style.lessonName}>1.0 Aprofundamento sobre python</span>
                                <span className={`${Style.lessonProgress} ${Style.lessonProgressDone}`}>1/1</span>
                                </li>
                                <li className={Style.lesson}>
                                <span className={Style.lessonStatus} />
                                <span className={Style.lessonName}>1.0.1 Python para automoções</span>
                                <span className={Style.lessonProgress}>0/1</span>
                                </li>
                                <li className={Style.lesson}>
                                <span className={Style.lessonStatus} />
                                <span className={Style.lessonName}>1.0.2 Python para negócios</span>
                                <span className={Style.lessonProgress}>0/2</span>
                                </li>
                            </ul>
                        </details>
                
                        <details className={Style.moduleCard}>
                            <summary className={Style.moduleSummary}>
                                <span>Modulo 3: Python III</span>
                                <svg className={Style.chevron} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9l6 6 6-6" />
                                </svg>
                            </summary>
                        </details>
                    </aside>
    
        
                    <section className={Style.lessonContent}>
                        <h3 className={Style.customizeTitle}>Personalize seu conteúdo</h3>
                
                        {/* FUTURO: <ContentModeChips /> */}
                        <div className={Style.chips}>
                            <button type="button" className={`${Style.chip} ${Style.chipActive}`}>Original</button>
                            <button type="button" className={Style.chip}>Organização</button>
                            <button type="button" className={Style.chip}>Revisão</button>
                            <button type="button" className={Style.chip}>Documentação</button>
                            <button type="button" className={Style.chip}>Fixação</button>
                        </div>
                
                        <h1 className={Style.lessonTitle}>1.0 Aprofundamento sobre python</h1>
                        <p className={Style.lessonDescription}>
                        O aprofundamento em Python permite explorar recursos mais avançados da
                        linguagem, como funções, estruturas de dados, orientação a objetos e
                        bibliotecas especializadas. Esses conhecimentos ajudam a desenvolver
                        sistemas mais complexos, automatizar tarefas e trabalhar com análise de
                        dados e inteligência artificial. Com a prática, é possível criar
                        aplicações mais organizadas, eficientes e profissionais.
                        </p>
                
                        <div className={Style.videoPlayer}>
                            <img className={Style.Thumb} src={pythonCover} alt="Capa da aula: Python" />
                            <span className={Style.videoDuration}>08:42</span>
                        </div>
                    </section>
                </div>
            <Footer />
        </div>
    )
}

export default Course
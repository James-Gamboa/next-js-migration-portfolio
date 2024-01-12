
import Link from "next/link"

function MainMenu() {
    return (
    <>
    <nav className="main-nav" id="main-nav">
        <ul className="main-menu">
            <li className="main-menu__item"><Link href="/" className="main-menu__link">Inicio</Link></li>
            <li className="main-menu__item"><Link href="/ProjectsPage" className="main-menu__link">Proyectos</Link></li>
            <li className="main-menu__item"><Link href="/ExperiencePage" className="main-menu__link">Experiencias</Link></li>
            <li className="main-menu__item"><Link href="/SkillsPage" className="main-menu__link">Habilidades</Link></li>
        </ul>
    </nav>
    </>
    )
}

export default MainMenu

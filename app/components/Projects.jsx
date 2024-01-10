// @ts-nocheck
import ProjectCard from "./ProjectCard"
import "../../public/css/styles.css";

// Importacion de Imagenes
import P1Img from "../../public/img/projects/cocacola-page.png";
import P2Img from "../../public/img/projects/pokedex-page.png";
import P3Img from "../../public/img/projects/testomonios-freecodecamp.png";
import P4Img from "../../public/img/projects/news-homepage-page.jpg";
import P5Img from "../../public/img/projects/conectaCuatro-page.png";
import P6Img from "../../public/img/projects/loopstudios-page.png";
import P7Img from "../../public/img/projects/events-site-page.png";
import P8Img from "../../public/img/projects/calculadoraReact-page.png";
import P9Img from "../../public/img/projects/contraluz-page.png";

const projects = [
    {   
        "id": 1,
        "image": P1Img,
        "title": "Coca Cola Landing Page",
        "description": "Proyecto creado como practica en un Bootcamp ",
        "link": "https://james-gamboa.github.io/Practical-coca-cola-page/"
    },
    {
        "id": 2,
        "image": P2Img,
        "title": "Pokedex" ,
        "description": "Proyecto elaborado como practica de conocimientos en Javascript",
        "link": "https://james-gamboa.github.io/Pokedex/"
    },
    {
        "id": 3,
        "image": P3Img,
        "title": "Testimonios freeCodecamp" ,
        "description": "Curso Practico de React de Proyectos en React de freeCodecamp",
        "link": "https://marvelous-otter-5098e9.netlify.app/"
    },
    {
        "id": 4,
        "image": P4Img,
        "title": "News Homepage" ,
        "description": "Pagina Elaborada como practica de conocimientos en Html,Css,Javascript y Sass",
        "link": "https://flourishing-taffy-990027.netlify.app/"
    },
    {
        "id": 5,
        "image": P5Img,
        "title": "Conecta Cuatro" ,
        "description": "Proyecto elaborado como practica de conocimientos en Javascript",
        "link": "https://james-gamboa.github.io/conecta-cuatro/conecta4.html"
    },
    {
        "id": 6,
        "image": P6Img,
        "title": "Frontend-Mentor-Loopstudios" ,
        "description": "Pagina elaborada como practica de conocimientos en Sass",
        "link": "https://james-gamboa.github.io/Frontend-Mentor-Loopstudios-landing-page/"
    },
    {
        "id": 7,
        "image": P7Img,
        "title": "Events Site" ,
        "description": "Pagina elaborada como practica de conocimientos en Javascript",
        "link": "https://monumental-kringle-6493f0.netlify.app/"
    },
    {
        "id": 8,
        "image": P8Img,
        "title": "Calculadora" ,
        "description": "Curso Practico de React de Proyectos en React de freeCodecamp",
        "link": "https://voluble-squirrel-2c2897.netlify.app/"
    },
    {
        "id": 9,
        "image": P9Img,
        "title": "Contraluz" ,
        "description": "Durante mi proyecto final en el CETAV, colaboré con un cliente real para desarrollar y lanzar un ecommerce de venta de temperas utilizando la plataforma Shopify",
        "link": "https://www.contraluzcr.com/"
    },
]

function Projects() {
    return (
        <>
        <h2 className="title">Proyectos</h2>
            <div className="projects-grid-container">
                {
                    projects.map(proyecto => 
                    <ProjectCard 
                    key={proyecto.id}
                    image={proyecto.image} 
                    title={proyecto.title} 
                    description={proyecto.description} 
                    link={proyecto.link} />)
                }
                    {/* <ProjectCard/> */}
            </div>
        </>
    )
}

export default Projects

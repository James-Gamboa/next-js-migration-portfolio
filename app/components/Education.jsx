// @ts-nocheck
import Image from "next/image";
import "../../public/css/styles.css";

const Education = () => {
    return (
        <>
        <section className="i-am">
            <div className="main-container">
                <h1 className="title">Educación</h1>
                <div className="flex-container-2">
                <Image className="empty-2" src="/img/icons/bar-graphic.png" alt="Bar Graphic"width={384} height={384}/>
                        <ul>
                            <li><strong>He invertido tiempo y dedicación en participar en diversos cursos en línea </strong> 
                            y programas de formación para adquirir un sólido conjunto de habilidades técnicas en el campo del desarrollo de Front End. Algunos de los cursos que he completado son:</li>
                            <br></br>
                            <li><strong>"JavaScript Algorithms and Data Structures" en freeCodeCamp : </strong> 
                            Este curso me ha proporcionado una comprensión profunda de los algoritmos y estructuras de datos fundamentales, lo cual es crucial para el desarrollo eficiente y escalable de aplicaciones web.</li>
                            <br></br>
                            <li><strong>"Responsive Web Design" en freeCodeCamp : </strong> 
                            Durante este curso, adquirí conocimientos sobre los principios y las mejores prácticas del diseño web adaptable, 
                            permitiéndome crear interfaces de usuario que se adaptan 
                            a diferentes dispositivos y tamaños de pantalla.</li>
                            <br></br>
                            <li><strong>"Desarrollo Web Frontend HTML y CSS" en Udemy : </strong> 
                            A través de este curso, he aprendido técnicas avanzadas de maquetación y diseño web utilizando HTML y CSS. He adquirido habilidades en la creación de diseños atractivos y responsivos.</li>
                            <br></br>
                        </ul>
                </div>
            </div>
            <div className="section-divider"></div>
        </section>
        </>    
    )
} 

export default Education

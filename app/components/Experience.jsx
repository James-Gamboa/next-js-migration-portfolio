// @ts-nocheck
import Image from 'next/image';
import "../../public/css/styles.css";

const Experience = () => {
  return (
    <>
      <section className="i-am">
        <div className="main-container">
          <h1 className="title">Experiencia</h1>
          <div className="flex-container-2">
            <Image className="empty" src="/img/icons/office.png"  width={384} 
              height={384} alt="Office Icon With User" />
            <ul className="letter-small">
              <li>
                <strong>
                  Aunque no tengo experiencia laboral formal en el campo del
                  desarrollo Front-End, he estado buscando constantemente
                  oportunidades para aplicar los conocimientos y habilidades
                  adquiridos a través de cursos y proyectos personales.
                </strong>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default Experience;

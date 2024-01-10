// @ts-nocheck
import Image from 'next/image';

const Skills = () => {
    return(
        <>
        <section className="i-am">
            <div className="main-container">
                <h1 className="title">Habilidades Tecnicas</h1>
                <div className="flex-container-2">
                    <p>
                        Las siguientes competencias son las que adquiri conocimiento a partir de estudios formales e informales, los cuales mediante practica mejore la comprension y el desempeño del conocimiento.
                    </p>
                </div>
            </div>
            <div className="SkillsGrid">
                <Image src="../../public/img/icons-language/html.png" />
                <Image src="../../public/img/icons-language/css.png" />
                <Image src="../../public/img/icons-language/javascript.png" />
                <Image src="../../public/img/icons-language/mongo.png" />
                <Image src="../../public/img/icons-language/git.png" />
                <Image src="../../public/img/icons-language/sql-server.png" />
                <Image src="../../public/img/icons-language/react.png" />
                <Image src="../../public/img/icons-language/next-js.png"/>
                <Image src="../../public/img/icons-language/node-js.jpeg"/>
                <Image src="../../public/img/icons-language/drupal.png"/>
                <Image src="../../public/img/icons-language/sass.png"/>
                <Image src="../../public/img/icons-language/shopify.png"/>
            </div>
        </section>
        </>
    )
}

export default Skills
import Image from "next/image";

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
                <Image  width={400} height={200} src="/img/icons-language/html.png" />
                <Image  width={400} height={200} src="/img/icons-language/css.png" />
                <Image  width={400} height={200} src="/img/icons-language/javascript.png" />
                <Image  width={400} height={200} src="/img/icons-language/mongo.png" />
                <Image  width={400} height={200} src="/img/icons-language/git.png" />
                <Image  width={400} height={200} src="/img/icons-language/sql-server.png" />
                <Image  width={400} height={200} src="/img/icons-language/react.png" />
                <Image  width={400} height={200} src="/img/icons-language/next-js.png"/>
                <Image  width={400} height={200} src="/img/icons-language/node-js.jpeg"/>
                <Image  width={400} height={200} src="/img/icons-language/drupal.png"/>
                <Image  width={400} height={200} src="/img/icons-language/sass.png"/>
                <Image  width={400} height={200} src="/img/icons-language/shopify.png"/>
            </div>
        </section>
        </>
    )
}

export default Skills
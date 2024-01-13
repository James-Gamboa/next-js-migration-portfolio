import Image from "next/image";

const Skills = () => {
    return (
        <>
            <section className="i-am">
                <div className="main-container">
                    <h1 className="title">Habilidades Tecnicas</h1>
                    <div className="flex-container-2">
                        <p>
                            Las siguientes competencias son las que adquirí conocimiento a partir de estudios formales e informales, los cuales mediante práctica mejore la comprensión y el desempeño del conocimiento.
                        </p>
                    </div>
                </div>
                <div className="SkillsGrid">
                    <Image width={400} height={200} src="/img/icons-language/html.png" alt="HTML" />
                    <Image width={400} height={200} src="/img/icons-language/css.png" alt="CSS" />
                    <Image width={400} height={200} src="/img/icons-language/javascript.png" alt="JavaScript" />
                    <Image width={400} height={200} src="/img/icons-language/mongo.png" alt="MongoDB" />
                    <Image width={400} height={200} src="/img/icons-language/git.png" alt="Git" />
                    <Image width={400} height={200} src="/img/icons-language/sql-server.png" alt="SQL Server" />
                    <Image width={400} height={200} src="/img/icons-language/react.png" alt="React" />
                    <Image width={400} height={200} src="/img/icons-language/next-js.png" alt="Next.js" />
                    <Image width={400} height={200} src="/img/icons-language/node-js.jpeg" alt="Node.js" />
                    <Image width={400} height={200} src="/img/icons-language/drupal.png" alt="Drupal" />
                    <Image width={400} height={200} src="/img/icons-language/sass.png" alt="Sass" />
                    <Image width={400} height={200} src="/img/icons-language/shopify.png" alt="Shopify" />
                </div>
            </section>
        </>
    );
};

export default Skills;

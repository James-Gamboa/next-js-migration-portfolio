// @ts-nocheck
import Image from 'next/image';
import HTMLImg from "../../public/img/icons-language/html.png";
import CssImg from "../../public/img/icons-language/css.png";
import JsImg from "../../public/img/icons-language/javascript.png";
import MongoImg from "../../public/img/icons-language/mongo.png";
import GitImg from "../../public/img/icons-language/git.png";
import SqlImg from "../../public/img/icons-language/sql-server.png";
import ReactImg from "../../public/img/icons-language/react.png";
import NextJsImg from "../../public/img/icons-language/next-js.png";
import NodeJsImg from "../../public/img/icons-language/node-js.jpeg";
import DrupalImg from "../../public/img/icons-language/drupal.png";
import SassImg from "../../public/img/icons-language/sass.png";
import ShopifyImg from "../../public/img/icons-language/shopify.png";

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
                <Image src={HTMLImg} />
                <Image src={CssImg} />
                <Image src={JsImg} />
                <Image src={MongoImg} />
                <Image src={GitImg} />
                <Image src={SqlImg} />
                <Image src={ReactImg} />
                <Image src={NextJsImg}/>
                <Image src={NodeJsImg}/>
                <Image src={DrupalImg}/>
                <Image src={SassImg}/>
                <Image src={ShopifyImg}/>
            </div>
        </section>
        </>
    )
}

export default Skills
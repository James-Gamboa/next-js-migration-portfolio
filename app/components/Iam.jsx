import Image from "next/image";
import "../../public/css/styles.css";

const Iam = () => {
    return(
        <>
        <section className="i-am">
        <div className="main-container">
            <h1 className="title">I Am</h1>
            <div className="aboutMeContainer">
                <Image src="/img/profile-icons/working-computer.png"  width={25} height={500} alt="Programmer working on a computer"/>
                <ul>
                    <li>James Guevara Gamboa</li>
                    <li>I am from Costa Rica - Heredia </li>
                    <li>Born November 8, 2000</li>
                    <li className="floating"><a href="https://drive.google.com/file/d/1VUNftgruuZgUJU0qBIVsby72aXb-wCQT/view?usp=sharing" target={"_blank"}>CV</a></li>
                </ul>
            </div>
        </div>
        <div className="section-divider"></div>
    </section>
        </>
    )
}

export default Iam
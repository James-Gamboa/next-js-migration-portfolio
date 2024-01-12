import Image from "next/image";
import "../../public/css/styles.css";

const MainBanner = () => {
    return (
        <>
        <section className="main-section-banner">
            <div className="main-section-content">
                <p>Hola, soy <strong>James Guevara Gamboa.</strong><br/> Desarrollador Frontend, ¡Bienvenid@!</p>
            </div>
            <div className="main-section-img">
                <Image src="/img/profile-icons/photo-profile.jpeg" width={300} height={375} alt="Profile Picture" />
            </div>
        </section>
        </>    
    )
} 

export default MainBanner

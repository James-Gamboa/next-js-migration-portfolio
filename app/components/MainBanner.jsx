// @ts-nocheck
import Image from 'next/image';
import BannerImg from "../../public/img/profile-icons/photo-profile.jpeg";
import "../../public/css/styles.css";

const MainBanner = () => {
    return (
        <>
        <section className="main-section-banner">
            <div className="main-section-content">
                <p>Hola, soy <strong>James Guevara Gamboa.</strong><br/> Desarrollador Frontend, ¡Bienvenid@!</p>
            </div>
            <div className="main-section-img">
                <Image src={BannerImg} alt="Foto de Perfil" />
            </div>
        </section>
        </>    
    )
} 

export default MainBanner

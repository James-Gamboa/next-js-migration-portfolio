
import "../../public/css/styles.css";

const MainFooter = () => {
    return (
        <>
        <footer className="main-footer">
            <span className="fi fi-sr-envelope" onClick={() => window.location.href = "mailto:jjguevarag@gmail.com"}> jjguevarag@gmail.com</span>
            <p>Contacto: </p>
            <div className="social-networks">
                <a href="https://www.linkedin.com/in/james-guevara-gamboa/" target="_blank"><i className="fi fi-brands-linkedin"></i></a>
                <a href="https://github.com/James-Gamboa" target="_blank"><i className="fi fi-brands-github"></i></a>
            </div>
        </footer>
        </>
    )

}

export default MainFooter

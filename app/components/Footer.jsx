import "../../public/css/styles.css";

const MainFooter = () => {
    return (
        <>
        <footer className="main-footer">
            <p>Contacto: </p>
            <div className="social-networks">
                <a href="https://www.linkedin.com/in/james-guevara-gamboa/" target="_blank"><i className="fi fi-brands-linkedin"></i></a>
                <a href="https://github.com/James-Gamboa" target="_blank"><i className="fi fi-brands-github"></i></a>
                <a href="mailto:jjguevarag@gmail.com"><i className="fi fi-sr-envelope"></i>
                <span className="email-text">jjguevarag@gmail.com</span></a>
            </div>
        </footer>
        </>
    )

}

export default MainFooter

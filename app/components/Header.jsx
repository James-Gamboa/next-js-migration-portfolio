// @ts-nocheck
import MainMenu from "./MainMenu"
import Image from 'next/image';
import "../../public/css/styles.css";

function Header() {
    return (
        <>
        <header className="main-header">
            <div className="main-logo">
                <a href="/"><Image src="/img/icons/home_icon.png" width={300} height={200} alt="Logo" /></a>
            </div>
            <div className="main-menu-toggle"  onClick={() => document.getElementById("main-nav").classList.toggle("show")}></div>
            <MainMenu />            
        </header>
        </>
    )
}

export default Header

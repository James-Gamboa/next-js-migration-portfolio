// @ts-nocheck
import MainMenu from "./MainMenu"
import logo from "../../public/img/icons/home_icon.png";
import Image from 'next/image';
import "../../public/css/styles.css";

function Header() {
    return (
        <>
        <header className="main-header">
            <div className="main-logo">
                <a href="/"><Image src={logo} alt="Logo" /></a>
            </div>
            <div className="main-menu-toggle"  onClick={() => document.getElementById("main-nav").classList.toggle("show")}></div>
            <MainMenu />            
        </header>
        </>
    )
}

export default Header

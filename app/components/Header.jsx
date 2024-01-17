"use client"

import MainMenu from "./MainMenu"
import Image from "next/image";


function Header() {
    return (
        <>
        <header className="main-header">
            <div className="main-logo">
                <a href="/"><Image src="/img/icons/home-icon.png" width={55} height={100} alt="Home Logo" /></a>
            </div>
            <div className="main-menu-toggle"  onClick={() => document.getElementById("main-nav").classList.toggle("show")}></div>
            <MainMenu />            
        </header>
        </>
    )
}

export default Header

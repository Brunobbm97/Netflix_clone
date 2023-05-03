import React from "react";
import './Header.css';

export default ({black}) => {
    return(
        <header className={black? 'black': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="/assets/logo_netflix.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                <img src="/assets/avatar.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}
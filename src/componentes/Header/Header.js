import React from "react";
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = ({ setSearchTerm }) => {
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value.toLowerCase().trim());
    };

    return(
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />
                </button>
            </div>

            <div className="header__search">
                <img src={search} alt="Buscar" />
                <input
                id="search-input"
                maxLength="800"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="O que você quer ouvir?"
                onChange={handleInputChange} // Captura input
                />
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
             </div>
        </nav>
    )
};

export default Header;

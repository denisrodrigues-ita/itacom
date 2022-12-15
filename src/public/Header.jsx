import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Search from "../components/Search";

const Header = () => {
  return (
    <header>
      <div className={styles.grid}>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.flx}>
          <nav>
            <ul>
              <li>
                <Link to="/">Página Inicial</Link>
              </li>
              <li>
                <a>Procurar Por</a>
                <ul>
                  <li>
                    <Link to="/academias">Academias</Link>
                  </li>
                  <li>
                    <Link to="/farmacias">Farmácias</Link>
                  </li>
                  <li>
                    <Link to="/mercados">Mercados</Link>
                  </li>
                  <li>
                    <Link to="/padarias">Padarias</Link>
                  </li>
                  <li>
                    <Link to="/restaurantes">Restaurantes</Link>
                  </li>
                  <li>
                    <Link to="/servicos">Serviços</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;

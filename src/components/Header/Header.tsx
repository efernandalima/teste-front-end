import { useState } from "react";
import styles from "./Header.module.scss";

import {
  iconShield,
  iconTruck,
  iconCreditCard,
  iconSearch,
  iconBox,
  iconHeart,
  iconUser,
  iconCart,
  iconCrown,
} from "../../assets/icons";
import logoImg from "../../assets/images/logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Barra topo */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarItem}>
            <img src={iconShield} alt="" aria-hidden="true" />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </div>
          <div className={styles.topBarItem}>
            <img src={iconTruck} alt="" aria-hidden="true" />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </div>
          <div className={styles.topBarItem}>
            <img src={iconCreditCard} alt="" aria-hidden="true" />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </div>
        </div>
      </div>

      {/* Barra principal */}
      <div className={styles.mainBar}>
        <div className={styles.container}>
          <a
            href="/"
            className={styles.logo}
            aria-label="Econverse - Página inicial"
          >
            <img src={logoImg} alt="Econverse" />
          </a>

          <div className={styles.search}>
            <input
              type="search"
              placeholder="O que você está buscando?"
              aria-label="Buscar produtos"
            />
            <button type="submit" aria-label="Buscar">
              <img src={iconSearch} alt="" aria-hidden="true" />
            </button>
          </div>

          <div className={styles.actions}>
            <button aria-label="Minha conta" className={styles.desktopOnly}>
              <img src={iconBox} alt="" aria-hidden="true" />
            </button>
            <button aria-label="Favoritos" className={styles.desktopOnly}>
              <img src={iconHeart} alt="" aria-hidden="true" />
            </button>
            <button aria-label="Perfil" className={styles.desktopOnly}>
              <img src={iconUser} alt="" aria-hidden="true" />
            </button>
            <button aria-label="Carrinho">
              <img src={iconCart} alt="" aria-hidden="true" />
            </button>
            <button
              className={styles.hamburger}
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={menuOpen ? styles.hamburgerOpen : ""}></span>
              <span className={menuOpen ? styles.hamburgerOpen : ""}></span>
              <span className={menuOpen ? styles.hamburgerOpen : ""}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Navegação */}
      <nav
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        aria-label="Menu principal"
      >
        <div className={styles.container}>
          <ul className={styles.navList}>
            <li>
              <a href="#">Todas categorias</a>
            </li>
            <li>
              <a href="#">Supermercado</a>
            </li>
            <li>
              <a href="#">Livros</a>
            </li>
            <li>
              <a href="#">Moda</a>
            </li>
            <li>
              <a href="#">Lançamentos</a>
            </li>
            <li>
              <a href="#" className={styles.active}>
                Ofertas do dia
              </a>
            </li>
            <li>
              <a href="#" className={styles.signature}>
                <img src={iconCrown} alt="" aria-hidden="true" />
                Assinatura
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

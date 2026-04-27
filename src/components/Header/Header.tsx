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
    <div className={styles.headerWrapper}>
      <header className={styles.header} role="banner">
        {/* Barra topo */}
        <div className={styles.topBar} aria-label="Benefícios">
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
              aria-label="Econverse - Ir para página inicial"
              aria-current="page"
            >
              <img src={logoImg} alt="Econverse" width={130} height={41} />
            </a>

            <div className={styles.search} role="search">
              <label htmlFor="search-input" className={styles.srOnly}>
                Buscar produtos
              </label>
              <input
                id="search-input"
                type="search"
                placeholder="O que você está buscando?"
                autoComplete="off"
              />
              <button type="submit" aria-label="Buscar">
                <img src={iconSearch} alt="" aria-hidden="true" />
              </button>
            </div>

            <div
              className={styles.actions}
              role="group"
              aria-label="Ações do usuário"
            >
              <button aria-label="Minha conta" className={styles.desktopOnly}>
                <img src={iconBox} alt="" aria-hidden="true" />
              </button>
              <button aria-label="Favoritos" className={styles.desktopOnly}>
                <img src={iconHeart} alt="" aria-hidden="true" />
              </button>
              <button aria-label="Meu perfil" className={styles.desktopOnly}>
                <img src={iconUser} alt="" aria-hidden="true" />
              </button>
              <button aria-label="Carrinho de compras">
                <img src={iconCart} alt="" aria-hidden="true" />
              </button>
              <button
                className={styles.hamburger}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
                aria-controls="main-nav"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navegação */}
      <nav
        id="main-nav"
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        aria-label="Menu principal"
      >
        <div className={styles.navInner}>
        <div className={styles.container}>
          <ul className={styles.navList} role="list">
            <li>
              <a href="/categorias">Todas categorias</a>
            </li>
            <li>
              <a href="/supermercado">Supermercado</a>
            </li>
            <li>
              <a href="/livros">Livros</a>
            </li>
            <li>
              <a href="/moda">Moda</a>
            </li>
            <li>
              <a href="/lancamentos">Lançamentos</a>
            </li>
            <li>
              <a href="/ofertas" className={styles.active} aria-current="page">
                Ofertas do dia
              </a>
            </li>
            <li>
              <a href="/assinatura" className={styles.signature}>
                <img src={iconCrown} alt="" aria-hidden="true" />
                Assinatura
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

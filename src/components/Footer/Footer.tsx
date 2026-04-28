import styles from "./Footer.module.scss";
import logoImg from "../../assets/images/logo.svg";
import {
  iconInstagram,
  iconFacebook,
  iconLinkedin,
} from "../../assets/icons";

const navColumns = [
  {
    title: "Institucional",
    font: "workSans" as const,
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    font: "workSans" as const,
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    font: "poppins" as const,
    links: ["Termos e Condições", "Política de Privacidade", "Troca e Devolução"],
  },
];

const socials = [
  { icon: iconInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: iconFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: iconLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

function Footer() {
  return (
    <footer>
      <div className={styles.footerMain}>
        <div className={styles.container}>

          <div className={styles.brandCol}>
            <div className={styles.brandTop}>
              <img src={logoImg} alt="Econverse" className={styles.footerLogo} />
              <p className={styles.brandDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialLink}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={s.icon} alt="" aria-hidden="true" width={24} height={24} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.separator} aria-hidden="true" />

          <nav className={styles.navColumns} aria-label="Links do rodapé">
            {navColumns.map((col) => (
              <div key={col.title} className={styles.navCol}>
                <p className={styles.navTitle}>{col.title}</p>
                <ul className={styles.navList} role="list">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className={
                          col.font === "poppins"
                            ? styles.navLinkPoppins
                            : styles.navLinkWorkSans
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}

export default Footer;

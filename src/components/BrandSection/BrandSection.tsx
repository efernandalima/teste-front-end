import styles from "./BrandSection.module.scss";
import logoImg from "../../assets/images/logo.svg";

const brands = [
  { id: 1, name: "Econverse" },
  { id: 2, name: "Econverse" },
  { id: 3, name: "Econverse" },
  { id: 4, name: "Econverse" },
  { id: 5, name: "Econverse" },
];

function BrandSection() {
  return (
    <section className={styles.section} aria-label="Navegue por marcas">
      <div className={styles.container}>
        <h2 className={styles.title}>Navegue por marcas</h2>
        <ul className={styles.list} role="list">
          {brands.map((brand) => (
            <li key={brand.id}>
              <a href="/marcas" className={styles.card} aria-label={brand.name}>
                <img src={logoImg} alt={brand.name} className={styles.logo} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BrandSection;

import { useState } from "react";
import styles from "./CategorySection.module.scss";
import iconTecnologia from "../../assets/icons/categories/icon-tecnologia.png";
import iconSupermercado from "../../assets/icons/categories/icon-supermercado.png";
import iconBebidas from "../../assets/icons/categories/icon-bebidas.png";
import iconFerramentas from "../../assets/icons/categories/icon-ferramentas.png";
import iconSaude from "../../assets/icons/categories/icon-saude.png";
import iconEsportes from "../../assets/icons/categories/icon-esportes.png";
import iconModa from "../../assets/icons/categories/icon-moda.png";

const categories = [
  { id: "tecnologia", label: "Tecnologia", icon: iconTecnologia },
  { id: "supermercado", label: "Supermercado", icon: iconSupermercado },
  { id: "bebidas", label: "Bebidas", icon: iconBebidas },
  { id: "ferramentas", label: "Ferramentas", icon: iconFerramentas },
  { id: "saude", label: "Saúde", icon: iconSaude },
  { id: "esportes", label: "Esportes e Fitness", icon: iconEsportes },
  { id: "moda", label: "Moda", icon: iconModa },
];

function CategorySection() {
  const [active, setActive] = useState("tecnologia");

  return (
    <section className={styles.section} aria-label="Compre por categoria">
      <div className={styles.container}>
        <h2 className={styles.title}>Compre por categoria</h2>
        <ul className={styles.list} role="list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                className={`${styles.card} ${active === cat.id ? styles.cardActive : ""}`}
                onClick={() => setActive(cat.id)}
                aria-pressed={active === cat.id}
              >
                <div className={styles.iconWrap}>
                  <img src={cat.icon} alt="" aria-hidden="true" />
                </div>
                <span className={styles.label}>{cat.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CategorySection;

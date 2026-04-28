import styles from "./Banner.module.scss";
import bannerImg from "../../assets/images/banner.png";

interface Props {
  onVerProduto?: () => void;
}

function Banner({ onVerProduto }: Props) {
  return (
    <section className={styles.banner} aria-label="Promoções em destaque">
      <img
        src={bannerImg}
        alt="Black Friday - Venha conhecer nossas promoções"
        className={styles.bannerImage}
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Venha conhecer nossas promoções</h1>
          <p className={styles.subtitle}>
            <strong>50% Off</strong> nos produtos
          </p>
          <button onClick={onVerProduto} className={styles.button}>
            Ver produto
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;

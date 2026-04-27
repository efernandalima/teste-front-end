import styles from "./Banner.module.scss";
import bannerImg from "../../assets/images/banner.png";

function Banner() {
  return (
    <section className={styles.banner} aria-label="Promoções em destaque">
      <img
        src={bannerImg}
        alt="Black Friday - Venha conhecer nossas promoções"
        className={styles.bannerImage}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Venha conhecer nossas promoções</h1>
        <p className={styles.subtitle}>
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="/ofertas" className={styles.button}>
          Ver produto
        </a>
      </div>
    </section>
  );
}

export default Banner;

import styles from "./BannerApoio.module.scss";
import bannerImg from "../../assets/images/banner-parceiros.jpg";

const banners = [
  {
    id: 1,
    image: bannerImg,
    title: "Parceiros",
    subtitle: "Lorem ipsum dolor sit amet, consectetur",
    ctaLabel: "Confira",
    ctaHref: "/parceiros",
  },
  {
    id: 2,
    image: bannerImg,
    title: "Parceiros",
    subtitle: "Lorem ipsum dolor sit amet, consectetur",
    ctaLabel: "Confira",
    ctaHref: "/parceiros",
  },
];

function BannerApoio() {
  return (
    <section className={styles.section} aria-label="Banners de apoio">
      <div className={styles.container}>
        <ul className={styles.grid} role="list">
          {banners.map((banner) => (
            <li key={banner.id} className={styles.card}>
              <img
                src={banner.image}
                alt=""
                aria-hidden="true"
                className={styles.bgImage}
              />
              <div className={styles.gradient} aria-hidden="true" />
              <div className={styles.content}>
                <h3 className={styles.title}>{banner.title}</h3>
                <p className={styles.subtitle}>{banner.subtitle}</p>
                <a href={banner.ctaHref} className={styles.cta}>
                  {banner.ctaLabel.toUpperCase()}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BannerApoio;

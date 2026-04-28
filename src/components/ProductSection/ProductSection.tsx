import { useState } from "react";
import styles from "./ProductSection.module.scss";
import type { Product } from "../../types/product";

const TABS = ["Celular", "Acessórios", "Tablets", "Notebooks", "TVs", "Ver todos"];
const PAGE_SIZE = 4;

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface Props {
  products: Product[];
  showTabs?: boolean;
}

function ProductSection({ products, showTabs = false }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const visible = products.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className={styles.section} aria-label="Produtos relacionados">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.line} aria-hidden="true" />
          <h2 className={styles.title}>Produtos relacionados</h2>
          <span className={styles.line} aria-hidden="true" />
        </div>

        {showTabs ? (
          <nav className={styles.tabs} aria-label="Filtrar por categoria">
            <ul className={styles.tabList} role="list">
              {TABS.map((tab, i) => (
                <li key={tab} className={styles.tabItem}>
                  <button
                    className={`${styles.tab} ${activeTab === i ? styles.tabActive : ""}`}
                    onClick={() => { setActiveTab(i); setPage(0); }}
                    aria-pressed={activeTab === i}
                  >
                    {tab.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <div className={styles.viewAllSimple}>
            <a href="/produtos" className={styles.viewAll}>
              Ver todos
            </a>
          </div>
        )}

        <div className={styles.carousel}>
          {totalPages > 1 && (
            <button
              className={`${styles.arrowBtn} ${styles.arrowLeft}`}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Página anterior"
            >
              <ChevronLeft />
            </button>
          )}

          <ul className={styles.grid} role="list">
            {visible.map((product) => {
              const originalPrice = product.price * 1.07;
              const installment = product.price / 2;
              return (
                <li key={product.productName} className={styles.card}>
                  <div className={styles.imageWrap}>
                    <img
                      src={product.photo}
                      alt={product.productName}
                      className={styles.productImage}
                    />
                  </div>
                  <div className={styles.info}>
                    <p className={styles.productName}>{product.descriptionShort || product.productName}</p>
                    <div className={styles.pricing}>
                      <span className={styles.originalPrice}>R$ {formatPrice(originalPrice)}</span>
                      <strong className={styles.currentPrice}>R$ {formatPrice(product.price)}</strong>
                    </div>
                    <p className={styles.installment}>ou 2x de R$ {formatPrice(installment)} sem juros</p>
                    <p className={styles.freeShipping}>Frete grátis</p>
                  </div>
                  <button className={styles.buyBtn}>COMPRAR</button>
                </li>
              );
            })}
          </ul>

          {totalPages > 1 && (
            <button
              className={`${styles.arrowBtn} ${styles.arrowRight}`}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Próxima página"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="15.5" stroke="#3442B5" />
      <path d="M18 10L12 16L18 22" stroke="#3442B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="15.5" stroke="#3442B5" />
      <path d="M14 10L20 16L14 22" stroke="#3442B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default ProductSection;

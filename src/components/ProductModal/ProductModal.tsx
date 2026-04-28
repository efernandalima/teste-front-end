import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ProductModal.module.scss";
import type { Product } from "../../types/product";

interface Props {
  product: Product | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: Props) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!product) return null;

  const formattedPrice = product.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
      role="presentation"
      aria-hidden="false"
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-name"
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <CloseIcon />
        </button>

        <div className={styles.imageSection}>
          <img
            src={product.photo}
            alt={product.productName}
            className={styles.productImage}
          />
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoTop}>
            <div className={styles.namePrice}>
              <p id="modal-product-name" className={styles.productName}>
                {product.productName.toUpperCase()}
              </p>
              <p className={styles.price}>R$ {formattedPrice}</p>
            </div>
            <div className={styles.descSection}>
              <p className={styles.description}>{product.descriptionShort}</p>
              <a href="/produto" className={styles.detailsLink}>
                Veja mais detalhes do produto &gt;
              </a>
            </div>
          </div>

          <div className={styles.actions}>
            <div
              className={styles.qtySelector}
              role="group"
              aria-label="Quantidade"
            >
              <button
                className={styles.qtyBtn}
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Diminuir quantidade"
              >
                <MinusIcon />
              </button>
              <span className={styles.qtyValue} aria-live="polite">
                {String(qty).padStart(2, "0")}
              </span>
              <button
                className={styles.qtyBtn}
                onClick={() => setQty((q) => q + 1)}
                aria-label="Aumentar quantidade"
              >
                <PlusIcon />
              </button>
            </div>

            <button className={styles.buyBtn}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1 1L15 15M15 1L1 15"
        stroke="#3F3F40"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" aria-hidden="true">
      <path d="M1 1H11" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M6 1V11M1 6H11"
        stroke="#3F3F40"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ProductModal;

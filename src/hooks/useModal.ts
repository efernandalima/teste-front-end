import { useState } from "react";
import type { Product } from "../types/product";

interface UseModalResult {
  isOpen: boolean;
  selectedProduct: Product | null;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

function useModal(): UseModalResult {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function openModal(product: Product) {
    setSelectedProduct(product);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedProduct(null);
    setIsOpen(false);
  }

  return { isOpen, selectedProduct, openModal, closeModal };
}

export default useModal;

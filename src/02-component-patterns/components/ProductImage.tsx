import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ img }: { img?: string }) => {
  const { product } = useContext(ProductContext);

  const imageToShow = img || product.img || noImage;

  return <img src={imageToShow} alt="Product" className={styles.productImg} />;
};

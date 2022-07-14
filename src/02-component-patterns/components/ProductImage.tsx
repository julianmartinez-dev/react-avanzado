import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  const imageToShow = img || product.img || noImage;

  return (
    <img src={imageToShow} alt="Product" className={`${styles.productImg} ${className}`} style={style}/>
  );
};

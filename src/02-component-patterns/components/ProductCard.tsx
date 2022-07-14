import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { IProduct, ProductContextProps } from '../interfaces/productInterfaces';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  product: IProduct;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties
}

export const ProductCard = ({product, children, className, style} : Props) => {
  const { counter, increaseBy } = useProduct();

  return (

    <Provider value ={{
        counter,
        increaseBy,
        product
    }}>
      <div 
        className={`${styles.productCard} ${className} `}
        style={style}
      > 
        {children}
      </div>
    </Provider>
  );
};



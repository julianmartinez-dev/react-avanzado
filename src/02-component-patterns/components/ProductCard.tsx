import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductProps } from '../interfaces/productInterfaces';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({product, children} : ProductProps) => {
  const { counter, increaseBy } = useProduct();

  return (

    <Provider value ={{
        counter,
        increaseBy,
        product
    }}>
      <div className={styles.productCard}> 
        {children}
      </div>
    </Provider>
  );
};



import { ReactElement } from "react";

export interface ProductProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: IProduct;
  counter: number;
  increaseBy: (amount: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}

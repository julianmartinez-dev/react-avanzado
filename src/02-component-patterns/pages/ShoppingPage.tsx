
import { ProductCard, ProductButtons, ProductImage, ProductTitle  } from '../components/';

const product = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image img={'./logo192.png'} />
          <ProductCard.Title/>
          <ProductCard.Buttons/>
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage / >
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  );
}

export default ShoppingPage
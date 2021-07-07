import Product from '../Product'
import OrderResume from '../OrderResume'

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <h5> Carrinho de compras </h5>
      <Product />
      <Product />
      <Product />
      <OrderResume />
    </div>
  )
}

export default ShoppingCart
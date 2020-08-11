import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from './styles';
import * as CartActions from '../../store/modules/cart/action';

export default function Home({ history }) {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/products');

      const data = response.data.map((prod) => ({
        ...prod,
        formatedPrice: formatPrice(prod.price),
      }));

      setProducts(data);
    }

    fetchData();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id, history));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formatedPrice}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

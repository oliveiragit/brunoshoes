import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CartAction from '../../store/modules/cart/action';
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../util/format';

export default function Cart() {
  const history = useHistory();
  const { cart, total } = useSelector((state) => ({
    total: formatPrice(
      state.cart.reduce((totalP, product) => {
        totalP = product.price * product.amount + totalP;
        return totalP;
      }, 0)
    ),
    cart: state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  }));

  const dispatch = useDispatch();

  function onRemove(id) {
    dispatch(CartAction.removeFromCart(id));
  }

  function increment(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formatedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline color="#7159c1" size={20} />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline color="#7159c1" size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => onRemove(product.id)}>
                  <MdDelete color="#7159c1" size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button
          onClick={() => {
            history.push('/thankyou');
          }}
          type="button"
        >
          Finalizar pedido
        </button>
        <Total>
          <span>total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

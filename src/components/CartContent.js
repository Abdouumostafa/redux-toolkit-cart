import { useDispatch, useSelector } from "react-redux";
import CartSingleItem from "./CartSingleItem";
import { openModal } from "../features/modal/modalSlice";

const CartContent = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartSingleItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {total.toFixed(2)}</span>
          </h4>
        </div>
        <div className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </div>
      </footer>
    </section>
  );
};
export default CartContent;

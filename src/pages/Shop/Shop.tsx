import "./shop.css";
import shop from "../../shop.json";
import { useState } from "react";

function Shop() {
  const [data, setData] = useState(shop);

  return (
    <div className="background-shop">
      <section className="container-list-dish">
        {data.map((el) => {
          return (
            <figure key={el.id} className="container-dish">
              <img src={el.image} alt="" />
              <button type="button">
                <img src="/images/shop/icon-add-to-cart.svg" alt="panier" />
                Add to Cart
              </button>
              <p>{el.name}</p>
              <h2>{el.description}</h2>
              <h3>{`$ ${el.price}`}</h3>
            </figure>
          );
        })}
      </section>
      <section className="container-dish-cart">
        <h2>Your Cart (0)</h2>
        <section>
          <p>Order Total</p>
          <p>$ 50.50</p>
        </section>
        <button type="button">Confirm Order</button>
      </section>
    </div>
  );
}
export default Shop;

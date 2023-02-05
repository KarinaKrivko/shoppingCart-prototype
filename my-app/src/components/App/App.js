import Title from "../Title/Title";
import { useState } from "react";
import CartItem from "../CartItem/CartItem";
import Calculation from "../Calculation/Calculation";
import s from './index.module.css';


function App() {

  const products =[
    {id: 1, title: 'iPhone 9', price: 511.23, count: 1},
    {id: 2, title: 'iPhone 9', price: 511.23, count: 3},
    {id: 3, title: 'iPhone 9', price: 511.23, count: 3},
    {id: 4, title: 'iPhone 9', price: 511.23, count: 3},
    {id: 5, title: 'iPhone 9', price: 511.23, count: 3},
    {id: 6, title: 'iPhone 9', price: 511.23, count: 3},
    {id: 7, title: 'iPhone 9', price: 511.23, count: 3},
    {id: 8, title: 'iPhone 9', price: 511.23, count: 3}
  ];

  const increase = incrId => {
    const target = cart.find(({id}) => id ===  incrId);
    target.count++;
    setCart([...cart]);
  }

  const decrease = decrId => {
    const target = cart.find(({id}) => id ===  decrId);
    target.count--;

    if (target.count === 0) {
      setCart(cart.filter(el => el !== target));
    }else{
    setCart([...cart]);
  }
}

  const [cart, setCart] = useState(products);
  
  return (
    <div>
      <Title/>
      <div className={s.cart}>
      { cart.map(item =>
      <CartItem 
      increase={increase}
      decrease={decrease}
      key={item.id}
      {...item} />)
      }
   </div>
   <Calculation  cart={cart}/>
    </div>
  );
}

export default App;

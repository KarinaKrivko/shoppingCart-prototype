import React from 'react';
import ImagePath from '../media/1.jpg'

function CartItem({id, title, price, count, increase, decrease}) {
    return (
        <div >
           
          <p>{id}</p> 
          <img src={ImagePath}></img> 
          <p>{title}</p> 
          <p>{price}</p>

          <p>{count}</p>
          <div>
              <button onClick={()=>increase(id)}>+</button>
              <button onClick={()=>decrease(id)}>-</button>
          </div>
        </div>
    );
}

export default CartItem;
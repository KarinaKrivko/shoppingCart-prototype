import React from 'react';
import s from './index.module.css';

function Calculation({cart}) {
    const totalSum = cart.reduce((pre,{count, price}) => pre + count * price, 0);
    const totalCount = cart.reduce((pre,{count}) => pre + count, 0);
    return (
        <div className={s.total}>
           <p>Total_sum: {totalSum}</p>
           <p>Total_cout: {totalCount}</p>
        </div>
    );
}

export default Calculation;
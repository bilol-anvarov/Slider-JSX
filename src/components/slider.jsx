import React, { useState } from 'react'
import products from './slider-text'


export default function Slider() {
    let [num, setNum] = useState(0);
    let product = products[num]; 
    const more =()=>{
        if(num == (products.length - 1)){
            setNum(0)
        } else{
            setNum(num += 1)
        }
    }
    const less =()=>{
        if(num == 0){
            setNum(num = products.length - 1)
        } else{
            setNum(num -= 1)
        }

    }

    return (
    <div className='flex'>
        <button onClick={less}>{'<'}</button>
        <div className="card">
            <img src={product.imgSrc} alt={product.imgAlt} />
            <div className="text">
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        </div>
        <button onClick={more}>{'>'}</button>
    </div>
  )
}

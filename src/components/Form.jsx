import React, { useState } from 'react';

const Form = () => {
    
    const [added, setAdded] = useState(false)
    const [info, setInfo] = useState(false)

    const add = () => setAdded(true)
    const inf = () => setInfo(true)

    const addremove = () => {
        setAdded(false)
    }
    const addInf = () => {
        setInfo(false)
    }
    
    return (
        <>
            <div className='commonBlock'>
                <div><img src="nike.png" alt="Кроссовок" /></div>
                <div className='footer1'>
                    <div className='name'>
                        <h1>Nike Sneaker</h1>
                        <h1>$120</h1>
                    </div>
                    <button className='btn' onClick={inf}>Детали</button>
                    <div className='addBlock'>{info? <div className='addBlock1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <button className='addBtn' onClick={addInf}>x</button>
                    </div>: null}</div>
                </div>
                <div>
                    <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <button className='btn2' onClick={add}>{added? 'В корзине': 'Добавить в корзину'}</button>
                </div>
                <div  onClick={addremove}>{added? <button className='delete'>Удалить из корзины</button>
                : null}</div>
            </div>
        </>
    );
};

export default Form;
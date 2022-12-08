import React, { useState } from 'react';
import { shop } from '../shop'


const Form = () => {

    const [added, setAdded] = useState(false)
    const [info, setInfo] = useState(false)
    const [arr, setArr] = useState(shop.challenges)
    const add = () => setAdded(true)
    const inf = () => setInfo(true)

    const addremove = () => {
        setAdded(false)
    }
    const addInf = () => {
        setInfo(false)
    }

    const [value, setValue] = useState('');

    const filteredName = (e) => {
        setValue(e.target.value)
        setArr(
            shop.challenges.filter((item) => {
                return item.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        )
    }

return (
    <>
        <input type='text'
            placeholder='Search in the country...'
            className='search_input'
            value={value}
            onChange={filteredName}
             />
        <div className='Block1'>
            {arr.map((item, index) => {
                return (
                    <div className='commonBlock'>
                        <div>{item.img}</div>
                        <div className='footer1'>
                            <div className='name'>
                                <h1>{item.name}</h1>
                                <h1>{item.price}</h1>
                            </div>
                            <button className='btn' onClick={inf}>Детали</button>
                            <div className='addBlock'>{info ? <div className='addBlock1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                <button className='addBtn' onClick={addInf}>x</button>
                            </div> : null}</div>
                        </div>
                        <div>
                            <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            <button className='btn2' onClick={add}>{added ? 'В корзине' : 'Добавить в корзину'}</button>
                        </div>
                        <div onClick={addremove}>{added ? <button className='delete'>Удалить из корзины</button>
                            : null}</div>
                    </div>
                )
            })}
        </div>

    </>
);
};

export default Form;
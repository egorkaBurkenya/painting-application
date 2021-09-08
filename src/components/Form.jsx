import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';

const Form = ({addItem}) => {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [desc, setDesc] = useState('');

    const addNewItem = e => {
        e.preventDefault();
        addItem({name, link, desc})
    }

    return (
        <div className='Form'>
            <h1>Add new item</h1> 
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <MyInput placeholder='name' setValue={setName} value={name} />
                <MyInput placeholder='desc' setValue={setDesc} value={desc} />
                <MyInput placeholder='link' setValue={setLink} value={link} />
                <button className='button' onClick={addNewItem}>Add...</button>
            </form>
        </div>
    );
};

export default Form;
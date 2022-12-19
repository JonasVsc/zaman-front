

import './Create.css';
import  React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    

    //armazenando os dados do form
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    //Envia os dados do form
    const postData = () => {
        axios.post('https://639bc41f64fcf9c11ca2a8c5.mockapi.io/postData', {
            titulo,
            descricao,
        })
}

    return (<div className='Container'>
        <h1></h1>
        <form>
            
            <input placeholder='Adicione um titulo' onChange={(e) => setTitulo(e.target.value)} />


            <input placeholder='Adicione uma descrição' onChange={(e) => setDescricao(e.target.value)} />
            
        </form>
        <button type="submit" onClick={postData}>Criar</button>
    </div>)

}


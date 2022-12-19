

import './Create.css';
import  React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    

    //armazenando os dados do form
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');

    //Envia os dados do form
    const postData = () => {
        axios.post('https://639bc41f64fcf9c11ca2a8c5.mockapi.io/postData', {
            titulo,
            descricao,
            imagem
        })
}

    return (<div className='container'>
        <form >
            <div className='container-create'>
            <input className='input-title' placeholder='TITULO' onChange={(e) => setTitulo(e.target.value)} />


            <input className='input-desc' placeholder='DESCRIÇAO' onChange={(e) => setDescricao(e.target.value)} />

            <input  type='file' onChange={(e) => setImagem(e.target.value)} />
            
            </div>
        </form>
        <button className='button-submit' type="submit" onClick={postData}  >Criar</button>
        
    </div>)

}


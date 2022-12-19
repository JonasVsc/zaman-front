import React, { useEffect, useState } from 'react';
import axios from 'axios';

//estilizaçao
import './Home.css'

export default function Home() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
       axios.get('https://639bc41f64fcf9c11ca2a8c5.mockapi.io/postData')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    return (
        <div className='Container-cards'>
            {APIData.map((data) => {
                return (
                    <div className='card'>

                        <h1 className='card-title'>{data.titulo}</h1>
                        <img className='card-img'></img>
                        <p className='card-desc'>{data.descricao}</p>


                    </div>
                )})}


        </div>
    )

}

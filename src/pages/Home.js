import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
       axios.get('https://639bc41f64fcf9c11ca2a8c5.mockapi.io/postData')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    return (
        <div>
            {APIData.map((data) => {
                return (
                    <div className='card'>

                        <h1>{data.titulo}</h1>
                        <p>{data.descricao}</p>

                    </div>
                )})}


        </div>
    )

}

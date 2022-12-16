import React, { useEffect, useState } from 'react';
import axios from 'axios';


<<<<<<< HEAD
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
=======
const Home = () => {
    return (<div className="gallery">
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
                <img src="https://imageproxy.ifunny.co/resize:640x,quality:90x75/images/5bd89e86f4a3698fa21a642c911f6809bcbc1ade6cace4c173ecacac221c77de_3.jpg"/>
            </div>)
>>>>>>> 8efee4c (cadastro concluido)

}

import "./Cadastro.css"
import logo from './../../icon.png'




const Cadastro = () => {
    return (<div className="Container">
        <img src={logo} className="App-logo" alt="logo" />
                        <form className="Container">
                            <label>Email</label>
                                
                                    <input type="email" placeholder="Insira seu email" required/>
                                
                            <label>Nome de usuário</label>
                                
                                    <input type="text" placeholder="Insira seu nome de usuário" required/>
                                
                            <label>Senha</label>
                                
                                    <input type="password" placeholder="Insira sua senha" required pattern="[A-Za-z]{5}"/>
                        </form>   
               
                <a href="http://localhost:3000/"><button className="Cadastrar" type="button">Cadastrar</button></a>
    </div>)

}


export default Cadastro;
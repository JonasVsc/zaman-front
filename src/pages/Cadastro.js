import "./Cadastro.css"
import logo from './../icon.png'




const Cadastro = () => {
    return (<div className="Container">
        <img src={logo} className="App-logo" alt="logo" />
                    <section className="Cadastro">
                        <label class="credenciais">Email:</label>
                            <form>
                                <input className="credenciaisCadastro" type="email" placeholder="Insira seu email" required/>
                            </form>
                        <label class="credenciaisUsuarioCadastro">Nome de usuário:</label>
                            <form>
                                <input className="credenciaisCadastro" type="text" placeholder="Insira seu nome de usuário" required/>
                            </form>
                        <label class="credenciaisUsuarioCadastro">Senha:</label>
                            <form>
                                <input className="credenciaisCadastro" type="password" placeholder="Insira sua senha" required pattern="[A-Za-z]{5}"/>
                            </form>
                    </section>
                <a href="http://localhost:3000/"><button className="Cadastrar" type="button">Cadastrar</button></a>
    </div>)

}


export default Cadastro;
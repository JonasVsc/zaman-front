import './Login.css'
import logo from './../icon.png'



const Login = () => {
    return (
    <div className='Container'>
            <img src={logo} className="App-logo" alt="logo" />
            <section>
                <label class="credenciais">Email:</label>
                    <form>
                        <input type="email" placeholder="Insira seu email"/>
                    </form>
                <label class="credenciais">Senha:</label>
                    <form>
                        <input type="password" placeholder="Insira sua senha"/>
                    </form>
            </section>
            <a className='esqueci-senha'>Esqueci minha senha</a>
            <label><a href='http://localhost:3000/'><button class="entrar" type="button">Entrar</button></a></label>
            {/* <label><button class="google" type="button"><a src="https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png">Entre com sua conta Google</a></button></label> */}
            <label>Não tem uma conta? <a className='criar-conta' href="file:///C:/Users/picab/OneDrive/Documentos/Beatriz/Projeto%20Zaman%202.0/cadastro.html">Criar conta</a></label>
    </div>
    )

}


export default Login;
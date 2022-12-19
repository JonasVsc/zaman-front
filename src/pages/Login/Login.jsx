import './Login.css'
import logo from './../../icon.png'



const Login = () => {
    return (
    <div className='Container'>
            <img src={logo} className="App-logo" alt="logo" />
                <form className='Container'>
                <label>Email</label>
                    
                        <input type="email" placeholder="Insira seu email"/>
                    
                <label>Senha</label>
                    
                        <input type="password" placeholder="Insira sua senha"/>
                </form>
           
            <a className='esqueci-senha'>Esqueci minha senha</a>
            <label><a href='http://localhost:3000/'><button class="entrar" type="button">Entrar</button></a></label>
           
            <label>Não tem uma conta? <a className='criar-conta' href="file:///C:/Users/picab/OneDrive/Documentos/Beatriz/Projeto%20Zaman%202.0/cadastro.html">Criar conta</a></label>
    </div>
    )

}


export default Login;
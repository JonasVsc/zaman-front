import './Layout.css'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {

    return (
        <>
        <div className='Header'>
        <input type="text"></input>

        <Link className='link' to="/">HOME</Link>
        
        <Link className='link' to="/create">CREATE</Link>

        <Link className='link' to="/login">LOGIN</Link>

        <Link className='link' to="/cadastro">CADASTRO</Link>
        </div>

      <Outlet />
      </>

    );
}

export default Layout;




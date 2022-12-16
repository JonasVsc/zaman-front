
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

//IMPORTANDO AS PAGINAS
import Layout from './pages/Layout.js';
import Login from './pages/Login.js';
import Create from './pages/Create.js';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        <Route path="create" element={<Create />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


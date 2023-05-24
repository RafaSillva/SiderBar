import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Instrutor from './pages/instrutor/Instrutor';
import Treino from './pages/treinos/Treino';
import Usuario from './pages/usuario/Usuario';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/cadastro-instrutor' element={<Instrutor/>}/>
                <Route path='/cadastro-treino' element={<Treino/>}/>
                <Route path='/usuario' element={<Usuario/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
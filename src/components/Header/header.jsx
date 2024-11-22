import logo from '../../assets/logo.png'; 
import busca from '../../assets/busca.png'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/inicio';
import QueroDoar from '../../pages/QueroDoar/queroDoar';
import Doados from '../../pages/Doados/doados';
import S from "./header.module.scss"


export default function Header(){
    return(
        <BrowserRouter>

            <header>
                <section className={S.boxLogo}>
                    <img src={logo} alt="" />
                    <h1>Livros Vai Na Web</h1>
                </section>

                <nav className={S.boxMenu}>
                    <ul>
                        <li><Link to = "/" >Inicio</Link></li>
                        <li><Link to = "/doados">Livros Doados</Link></li>
                        <li><Link to = "/queroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <div className={S.boxSearch}>
                    <input className={S.boxInput} type="text" placeholder='O que você procura?' />
                    <img src={busca} alt="" />
                </div>
            </header>
                <Routes>

                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/doados" element={<Doados/>} />
                    <Route path="/queroDoar" element={<QueroDoar/>} />


                </Routes>
            </BrowserRouter>

    )
}
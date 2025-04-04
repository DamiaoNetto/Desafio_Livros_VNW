import S from './doados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Doados(){

    const [livros, setLivros] = useState([])

    const pegarLivros = async () =>{
        const response = await axios.get("https://livros-api-zdca.onrender.com/livros")
        setLivros(response.data)
     }

     useEffect(()=>{
        pegarLivros()
     },[])



    return(
        <section className={S.boxDoados}>
        <h2>Livros Doados</h2>
        <section className={S.boxCards}>
            <article>
                <img src="/assets/livro_design.jpg" alt="imagem de um livro que se chama o protagonista" />
                
                <h3>Design</h3>
                <p>Eric Evans</p>
                <p>Programação</p>
                
            </article>

            {livros.map((item)=>{
                return(
                    <article key={item.id}>
                    <a href={item.imagem_url}><img  src={item.imagem_url} alt= {`Imagem do livro: ${item.titulo}`} /></a>                 
                    <h3>{item.titulo}</h3>
                    <p>{item.categoria}</p>
                    <p>{item.autor}</p>
                </article>

                )

            })}

        </section>
    </section>
    )
}
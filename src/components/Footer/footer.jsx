import face from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import x from '../../assets/x.png'
import youtube from '../../assets/youtube.png'
import S from './footer.module.scss'

export default function Footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <div className={S.boxIconsRedes}>
                    <a href=""><img src={face} alt="" /></a>
                    <a href=""><img src={x} alt="" /></a>
                    <a href=""><img src={youtube} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                    <a href=""><img src={instagram} alt="" /></a>
                    
                </div>
            </section>

            <section className={S.boxInfo}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}
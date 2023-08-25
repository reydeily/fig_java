import * as S from "./styles"
import perfil from "../../assets/image 4.png"
import image from "../../assets/Design_sem_nome-removebg-preview.png"

export function Header() {
    return (
      <S.Header>
        <picture>
         <img src={image} alt="img" />
        </picture>
        <h1>SUNLAR</h1>
        <S.NavBar>
        <img src={perfil} alt="login" />
        <a href="entrar">ENTRAR/REGISTRAR</a>
        <a href="contato">Entre em contato conosco!</a>
        </S.NavBar>

      </S.Header>
    )
  }
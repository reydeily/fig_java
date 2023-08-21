import * as S from "./styles"
import image from "../../assets/Design_sem_nome-removebg-preview.png"

export function Header() {
    return (
      <S.Header>
        <picture>
         <img src={image} alt="img" />
      </picture>
        <h1>SUNLAR</h1>
         
      </S.Header>
    )
  }
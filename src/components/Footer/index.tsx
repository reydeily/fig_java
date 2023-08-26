import * as S from "./styles"
import image from "../../assets/homepage-27.png"
export function Footer (){
    return(
        <S.Footer>
            <picture>
            <img src={image} alt="img" />
            </picture>
            <S.NavBar>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </S.NavBar>
        </S.Footer>

    )
}
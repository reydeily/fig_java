import * as S from "./styles"
import inversor from "../../assets/inversor.jpg"
import in1 from "../../assets/inversor-8k_3__1.jpg"
import in2 from "../../assets/inversor-3k_2.jpg"


export function Produto() {
    return (
        <>
            
            <S.Section>
                <a href="/produto">
                <h2>Inversor 8Kw On-grid</h2>
                </a>
                <a href="/produto">
                <img src={in1} alt="8k" />
                </a>
            </S.Section>
            <S.Section>
                <a href="/produto">
                <h2>Inversor 5Kw On-grid</h2>
                </a>
                <a href="/produto">
                <img src={inversor} alt="5k" />
                </a>
            </S.Section>
            <S.Section>
            <a href="/produto">
                <h2>Inversor 3Kw On-grid</h2>
            </a>
            <a href="/produto">
                <img src={in2} alt="3k" />
            </a>
            <h1>*EM DESENVOLVIMENTO ATE 00:00 DE 27/08*</h1>
            </S.Section>


        </>
    )
}

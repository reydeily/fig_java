import * as S from "./styles"
import inversor from "../../assets/inversor.jpg"
import in1 from "../../assets/inversor-8k_3__1.jpg"
import in2 from "../../assets/inversor-3k_2.jpg"
import p1 from "../../assets/image 9.png"
import p2 from "../../assets/image 10.png"
import p3 from "../../assets/image 11.png"


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
                <h1>Veja também:</h1>
                <a href="/produto">
                <picture>
                 <img src={p1} alt="p1" />
                </picture>
                </a>
            </S.Section>
            <S.Section>
                <a href="/produto">
                <h2>Inversor 5Kw On-grid</h2>
                </a>
                <a href="/produto">
                <img src={inversor} alt="5k" />
                </a>
                <a href="/produto">
                <picture>
                 <img src={p2} alt="p1" />
                </picture>
                </a>
            </S.Section>
            <S.Section>
            <a href="/produto">
                <h2>Inversor 3Kw On-grid</h2>
            </a>
            <a href="/produto">
                <img src={in2} alt="3k" />
            </a>
            <a href="/produto">
                <picture>
                 <img src={p3} alt="p1" />
                </picture>
                </a>
            </S.Section>
        </>
    )
}

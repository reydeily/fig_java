import * as S from "./styles"
import inversor from "../../assets/inversor.jpg"
import micro from "../../assets/micro.jpg"
import placa from "../../assets/placa-solar555w.png"


export function Inicial() {
    return (
        <>
            
            <S.Section>
                <a href="/produto">
                <h2>Inversores</h2>
                </a>
                <a href="/produto">
                <img src={inversor} alt="inv" />
                </a>
            </S.Section>
            <S.Section>
                <a href="/produto">
                <h2>Micro Inversores</h2>
                </a>
                <a href="/produto">
                <img src={micro} alt="micro" />
                </a>
            </S.Section>
            <S.Section>
            <a href="/produto">
                <h2>Placa Fotovoltaica 550W</h2>
            </a>
            <a href="/produto">
                <img src={placa} alt="placa" />
            </a>
            </S.Section>


        </>
    )
}

/*<div id="enter"> 
<img src={perfil} alt="login" />
<a href="entrar">ENTRAR/REGISTRAR</a>
</div>
<div id="contat">
<a href="contato">Entre em contato conosco!</a>
</div>
<div id="im1">
<h2>Inversores</h2>
<img src={inversor} alt="inv" />
</div>
<div id="im2">
<h2>Micro Inversores</h2>
<img src={micro} alt="micro" />
</div>
<div id="im3">
<h2>Placa Fotovoltaica 550W</h2>
<img src={placa} alt="placa" />
</div>*/
import * as S from "./styles"
import perfil from "../../assets/image 4.png"
import inversor from "../../assets/inversor.jpg"
import micro from "../../assets/micro.jpg"
import placa from "../../assets/placa-solar555w.png"


export function Inicial() {
    return (
        <>
            
            <S.Section>
                <h2>Inversores</h2>
                <img src={inversor} alt="inv" />
            </S.Section>
            <S.Section>
                <h2>Micro Inversores</h2>
                <img src={micro} alt="micro" />
            </S.Section>
            <S.Section>
                <h2>Placa Fotovoltaica 550W</h2>
                <img src={placa} alt="placa" />
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
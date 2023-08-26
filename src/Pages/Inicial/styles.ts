import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`

padding: 10rem;

h2{
  display: flex;
  padding-top: 4rem;
  justify-content: center;
  font-size: xx-large;
  color: ${colors.preto}

}
a{
  text-decoration: none;
}
a:hover {
  background-color: ${colors.vclaro};
  color: ${colors.preto}
}


img{
  padding-left: 4rem;
  width: 400px;
  border: 3px solid ${colors.vclaro};
  background-color: ${colors.branco};
  padding: 0.5rem;
  margin: 5px;
  align-items: center;
  border-radius: 160px;
}

  background-color: ${colors.branco};
  align-items: center;
  justify-content: center;
`



/*export const nav = styled.nav`
 justify-content: center;
 align-items: center;
 div#enter{ 
  width: 300px;
  height: 100px;
  padding: 0.5rem;
  margin: 5px;
  border: 3px solid ${colors.vclaro};
  background-color: ${colors.branco};
  align-items: center;
  justify-content: center;
}
div#contat{
  width: 240px;
  border: 3px solid ${colors.vclaro};
  padding: 0.5rem;
  margin: 5px;
  margin-left: 20rem;
  display: flex;
  background-color: ${colors.cinza};
  position: absolute;
  top: 240px; left: 50px;
}
div#im1{
  width: 300px;
  border: 3px solid ${colors.vclaro};
  background-color: ${colors.branco};
  padding: 0.5rem;
  margin: 5px;
  align-items: center;

}
div#im2{
  width: 300px;
  border: 3px solid ${colors.vclaro};
  background-color: ${colors.branco};
  padding: 0.5rem;
  margin: 5px;
  align-items: center;
  margin-left: 30rem;
  position: sticky;
}
div#im3{
  width: 300px;
  border: 3px solid ${colors.vclaro};
  background-color: ${colors.branco};
  padding: 0.5rem;
  margin: 5px;
  align-items: center;
  margin-left: 60rem;
}

 


`*/

/*width: 300px;
  padding: 0.5rem;
  border: 3px solid ${colors.vclaro};
  background-color: ${colors.cinza};
  margin-left: 20rem;*/
/*div {
  width: 65px;
  height: 20px;
  border: 3px solid ${colors.branco};
  padding: 50px;
  margin: 60px;
}*/
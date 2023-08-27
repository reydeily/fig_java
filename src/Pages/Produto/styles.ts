import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
padding: 1rem;
margin-right: 30rem;
margin-left: 2rem;
h2{
  display: flex;
  padding-top: 0rem;
  justify-content: center;
  font-size: x-large;
  color: ${colors.preto}
}
h1{
  display: flex;
  margin-top: 3.5rem;
  justify-content: center;
  border: 3px solid ${colors.vclaro};
  font-size: xx-large;
  padding: 0.5rem;
  color: ${colors.preto}
}
a{
  text-decoration: none;
}
a:hover {
  background-color: ${colors.vclaro};
  color: ${colors.preto}
}

picture {
    margin-left: 1px;
    padding: 1rem;
    img {
      margin-top: 3.5rem;
      height: 18rem;
      border: 3px solid ${colors.branco};
      background-color: ${colors.cinza};
      border-radius: 200px;
    }
  }
img{
  padding-left: 4rem;
  width: 300px;
  border: 3px solid ${colors.vclaro};
  background-color: ${colors.branco};
  padding: 0.5rem;
  margin: 3px;
  align-items: center;
  border-radius: 125px;
}

  background-color: ${colors.branco};
  align-items: center;
  justify-content: center;
`

/*export const Section2 = styled.section`

h2{
  display: flex;

  margin-right: 50rem;
  padding-top: 25rem;
  justify-content: left;
  font-size: xx-large;
  color: ${colors.preto}
  
}


`
*/
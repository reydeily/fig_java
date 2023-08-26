import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
padding: 8rem;

h2{
  display: flex;
  padding-top: 0,5rem;
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
  width: 300px;
  border: 3px solid ${colors.vclaro};
  background-color: ${colors.branco};
  padding: 0.5rem;
  margin: 3px;
  align-items: center;
  border-radius: 160px;
}

  background-color: ${colors.branco};
  align-items: center;
  justify-content: center;
`
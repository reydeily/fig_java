import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  border-bottom: 0.5rem solid ${colors.vclaro};
  display: flex;
  align-items: center;
  justify-content: left;
  height: 194px;
  width:100%;
  background-color: ${colors.cinza};

picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    height: 100%;
    img {
      height: 100%;
    }
}
h1{
  padding: 2rem;
}
div.ent{

}

`

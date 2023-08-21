import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Footer = styled.footer`
border-bottom: 0.3rem solid ${colors.vclaro};
display: flex;
height: 194px;
width:100%;
background-color: ${colors.cinza};

picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    img {
      height: 100%;
    }
  }
`
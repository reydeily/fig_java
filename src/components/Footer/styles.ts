import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Footer = styled.footer`
border: 0.15rem solid ${colors.vclaro};
display: flex;
height: 5rem;
width:100%;
position: absolute;
bottom: 0;
background-color: ${colors.cinza};
align-items: center;
font-size: xx-large;
padding-left: 1rem;
color: ${colors.preto} ;
picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    height: 100%;
    img {
      height: 100%;
    }
}
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: left;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
    li:hover {
      background-color: ${colors.vclaro};
    }
  }

`
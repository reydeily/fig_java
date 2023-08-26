import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  border-bottom: 0.5rem solid ${colors.vclaro};
  display: flex;
  align-items: center;
  justify-content: left;
  height: 9rem;
  width:100%;
  background-color: ${colors.cinza};
  font-size: xx-large;

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

`

export const NavBar = styled.nav`
  /* Navegação */

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    picture {
    margin-left: 1px;
    padding: 1rem;
    height: 100%;
    img {
      height: 100%;
    }
  }
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100px;
    li {
      padding: 3rem;
      height: 100px;
      display: flex;
      align-items: center;
      a {
        padding-left: 1rem;
        font-size: x-large;
        text-decoration: none;
        color: ${colors.preto} ;
      }
    }
    li:hover {
      background-color: ${colors.vclaro};
    }
  }

`

import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  border-bottom: 0.5rem solid ${colors.vclaro};
  display: flex;
  align-items: center;
  justify-content: left;
  height: 6rem;
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

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 3rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        padding-left: 1rem;
        font-size: large;
        text-decoration: none;
        color: white ;
      }
    }
    li:hover {
      background-color: black;
    }
  }

`

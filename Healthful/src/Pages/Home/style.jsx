import styled from "styled-components";
import BannerIMG from "../../Assets/HomeImg/banner.svg";

export const Container = styled.div`
  display: block;
  overflow: auto;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100%;
`;

export const SecaoBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 88%;
  min-height: 88%;
  background-image: url(${BannerIMG});
  background-size: cover;
  box-shadow: 0px 4px 4px 2px rgba(0,0,0,0.1);
  margin-left: 6%;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: 10%;
  text-align: center;
  & span {
    margin: 3%;
    font-size: 23px;
    color: white;
  }
`;


export const BannerTexto = styled.p`
  font-size: 45px;        
  color: white;
  justify-content: center;
  position: relative;
`;

export const Apresentacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 6%;
  font-size: 150%;
`

export const LogoHealthful = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;

`

export const HomeTitulo = styled.div`
  font-family: 'Alata', sans-serif;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-top: 8%;
  font-size: 4rem;
  text-transform: uppercase;
`
export const HomeTexto = styled.div`

  font-family: 'Alata', sans-serif;
  display: flex;
  text-align: justify;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.5rem;

 
`
export const CrieArtigo = styled.div`
  font-family: 'Alata', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  font-weight: bold;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(0deg, rgba(15,123,5,1) 0%, rgba(25,241,0,1) 100%);
;
`

export const SecaoArtigo = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  display: flex;
`

export const SeparadorCard = styled.span`
  margin-left: 3px;
  margin-right: 3px;
`

export const Separador = styled.span`
  margin-left: 35px;
  margin-right: 35px;
`

export const CardsCategoria = styled.div`
  padding: 2%;
  margin-top: 7%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  display: flex;
 position: relative;

`

export const TextoArtigos = styled.p`
  width: 50%;
  margin: 2.5rem;
  color: black;
  text-align: left;
  font-size: 1.1rem;
  font-weight: lighter;
  flex-direction: row;

  
`;

export const ImagemArtigo = styled.img`
 width: 35%;
 height: auto;
`;


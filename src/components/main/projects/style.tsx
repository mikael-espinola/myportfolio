import styled from "styled-components";

interface Props {
  $image_url: string;
}

export const Container = styled.div`
  padding-top: 3em;
  width: 100%;
  margin: 3em 0 1em 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
`;

export const Card = styled.li`
  position: relative;
  width: 20em;
  height: 15em;

  &:hover .flip {
    transform: rotateY(180deg);
  }
`;

export const Flip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.5s;
`;

export const BaseCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #0000003a;
  backface-visibility: hidden;
`;
export const FaceCard = styled(BaseCard)<Props>`
  background-image: url(${(props) => require(`../../${props.$image_url}`)});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const CardTitleContainer = styled.div`
  background-color: #1817176f;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  backdrop-filter: blur(2px);
`;

export const CardTitle = styled.h4`
  color: #fff;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
`;

export const BackCard = styled(BaseCard)`
  background-color: #393838;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 0.6em;
  overflow: auto;
`;

export const Title = styled.h2`
  padding: 0.5em 0;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  font-size: 15px;
  padding: 0.4em 0;
  border: 1px black solid;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 1em;
  width: 100%;
`;
export const Description = styled.span`
  font-size: 0.95em;
  @media screen and (min-width: 700px) {
    font-size: 0.7em;
  }
`;

export const ButtonContainer = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-evenly;
`;
export const Button = styled.a`
  padding: 0 1em;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #000;
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  padding: 0.7em 0;
`;

export const TechTitle = styled.span`
  font-size: 14px;
`;

export const Techs = styled.span`
  background-color: #25242453;
  padding: 0.1em 0.6em;
  margin: 0.2em 0;
  border-radius: 8px;
  cursor: default;
  font-size: 10px;
`;

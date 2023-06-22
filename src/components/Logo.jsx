import styled from "styled-components";

export default function Logo( { imgSrc, aspectRatio, name, heightPercent } ) {
  return (
    <li>
      <LogoImgContainer>
        <LogoImg src={imgSrc} aspectRatio={aspectRatio} heightPercent={heightPercent}/>
      </LogoImgContainer>
      {name}
    </li>
  );
}

const LogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const LogoImg = styled.img`
  aspect-ratio: ${props => props.aspectRatio};
  height: ${props => props.heightPercent? props.heightPercent*0.4+'px': '40px'};
  @media (max-width: 768px) {
    height: ${props => props.heightPercent? props.heightPercent*0.25+'px' : '25px'};
  }
`

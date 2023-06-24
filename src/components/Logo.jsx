import styled from "styled-components";

export default function Logo( { imgSrc, aspectRatio, name, heightPercent, url } ) {
  return (
    <LogoWrapper onClick={()=>window.open(url, "_blank", "noreferrer")}>
      <LogoImgContainer>
        <LogoImg src={imgSrc} aspectRatio={aspectRatio} heightPercent={heightPercent}/>
      </LogoImgContainer>
      {name}
    </LogoWrapper>
  );
}

const LogoWrapper = styled.li`
    &:hover { 
        cursor: pointer;
        text-decoration: underline;
    }
`

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

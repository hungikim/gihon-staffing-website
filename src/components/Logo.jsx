import styled from "styled-components";

export default function Logo( { imgSrc, aspectRatio, name } ) {
  return (
    <li>
      <LogoImgContainer>
        <LogoImg src={imgSrc} aspectRatio={aspectRatio} />
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
  height: 40px;
  @media (max-width: 768px) {
    height: 25px;
  }
`

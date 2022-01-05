import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// sizes 객체에 따라 자동으로 media 쿼리 함수를 만듦
// 참고 https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  /* 기본적으로는 1024 가운데정렬, 가로크기가 작아짐에 따라 크기를 줄이고 768미만이 되면 꽉 채운디 */
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.desktop`width: 100%;`};
`;

const Button = styled.button`
  background: white;
  color: balck;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>Hi</Button>
      <Button inverted={true}>Border Only</Button>
    </Box>
  );
};

export default StyledComponent;

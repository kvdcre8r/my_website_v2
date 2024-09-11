import styled from "styled-components";

export function Contact() {
  const Title = styled.h1`
    font-family: spyagency;
    font-size: 1.5em;
    text-align: center;
    color: var(--text-color);
  `;
  const SubTitle = styled.h3`
    font-family: champion;
  `;
  const Wrapper = styled.section`
    padding: 4em;
    background: var(--header-color);
  `;
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <SubTitle>Hello app...</SubTitle>
    </Wrapper>
  );
}

import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function testComponent() {
  return (
    <Wrapper>
      <Title>Hello World! this is from Github Package Registry</Title>
    </Wrapper>
  );
}

export default testComponent;

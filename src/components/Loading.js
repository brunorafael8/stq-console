/* @flow */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${props =>
    props.gradient
      ? `linear-gradient(to right, ${props.color} 0%, ${props.gradient}  100%)`
      : props.color ? props.color : '#ffffff'};
  border: 0 solid #f8f8f8;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
`;

type Props = {
  color: string,
  gradient: string,
  children: React.Element,
};

const Loading = ({ color, gradient, children }) => (
  <Wrapper color={color} gradient={gradient}>
    {children}
  </Wrapper>
);

export default Loading;

import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h4`
  color: var(--color-dark-gray-3);
  text-transform: uppercase;
  margin-left: 1rem;
  font-weight: 700;
  font-size: 1.4rem;
  margin-top: 1rem;
`

const BoxContent = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: var(--box-shadow-1)
`

const Box = ({
  title,
  children
}) => (
  <Fragment>
    <Title>{title}</Title>
    <BoxContent>{children}</BoxContent>
  </Fragment>
)

Box.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default Box;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StepItem = styled.span`
  color: ${({ isActive }) =>
    (isActive
      ? 'var(--color-orange-1)'
      : 'var(--color-light-gray-1)'
    )};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
`

const Step = ({
  title,
  isActive
}) => (
  <StepItem isActive={isActive}>{title}</StepItem>
);

Step.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool
}

export default Step;

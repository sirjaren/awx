import 'styled-components/macro';
import React from 'react';
import { Td } from '@patternfly/react-table';
import styled, { css } from 'styled-components';

// table cells will automatically grow beyond specified width to accomodate
// multiple action buttons
const ActionsGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  align-items: center;

  ${props => {
    const columns = '40px '.repeat(props.numActions || 1);
    return css`
      grid-template-columns: ${columns};
    `;
  }}
`;

export default function ActionsTd({ numActions = 1, children }) {
  const width = numActions * 40;
  return (
    <Td
      css={`
        text-align: right;
        --pf-c-table--cell--Width: ${width}px;
      `}
    >
      <ActionsGrid numActions={numActions}>{children}</ActionsGrid>
    </Td>
  );
}

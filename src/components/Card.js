import React from 'react';
import styled from '@emotion/styled';
import { Card } from '@mui/material';


const StyleCard = styled(Card)(({ theme }) => ({
  padding: 16,
  boxShadow:  theme.customShadows.secondary,
  position: 'relative',
  overflow: 'hidden'
}));

const BaseCard = ({ children, ...other }) => {

  return (
    <StyleCard {...other}>
      {children}
    </StyleCard>
  );
};

export default BaseCard;

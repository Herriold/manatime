import { Box } from '@mui/material';
import { m } from 'framer-motion';
import React from 'react';
import { varContainer } from './variants/container';

const MotionContainer = ({ action = false, animate, children, ...other }) => {
  if (action) {
    return (
      <Box
        animate={animate ? 'animate' : 'exit'}
        component={m.div}
        initial={false}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      animate="animate"
      component={m.div}
      exit="exit"
      initial="initial"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
};

export default MotionContainer;

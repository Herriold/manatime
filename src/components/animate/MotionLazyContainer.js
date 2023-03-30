import { LazyMotion } from 'framer-motion';
import React from 'react';

// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features.js').then((res) => res.default);

const MotionLazyContainer = ({ children }) => (
  <LazyMotion features={loadFeatures} strict>
    {children}
  </LazyMotion>
);

export default MotionLazyContainer;

import { matchPath } from 'react-router-dom';

const isExternalLink = (path) => path.includes('http');

const getActive = (path, pathname) => (path ? !!matchPath({ end: false, path }, pathname) : false);

export { isExternalLink, getActive };

// eslint-disable-next-line import/no-cycle
export { default as NavSectionVertical } from './vertical';

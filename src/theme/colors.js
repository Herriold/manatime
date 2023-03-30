const BASE_COLORS = {
  'immo-reseau': {
    primary: '#9AC220',
    secondary: '#070605',
  },
  'oryx-immobilier': {
    primary: '#234F67',
    secondary: '#EF8A22',
  },
  'paul-parker-properties': {
    // primary: '#002C4B',
    // secondary: '#9D9D9D',
    primary: '#ED1651',
    secondary: '#2e2e2e',
  },
  'proprietes-privees': {
    primary: '#ED1651',
    secondary: '#2e2e2e',
  },
  'rezoximo': {
    primary: '#00415A',
    secondary: '#DAA288',
  },
};

const FORMAT_COLORS = Object.entries(BASE_COLORS).reduce((accumulator, [key, value]) => {
  let { primary } = value;
  let { secondary } = value;

  if (['rezoximo', 'oryx-immobilier'].includes(key)) {
    primary = value.secondary;
    secondary = value.primary;
  }

  Object.assign(accumulator, {
    [key]: {
      dark: {
        primary,
        secondary,
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      light: {
        primary,
        secondary,
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  });

  return accumulator;
}, {});

export { FORMAT_COLORS, BASE_COLORS};

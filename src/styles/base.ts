const theme = {
  color: {
    orange: '#F9604A',
    red: '#EA1C24',
    darkBlue: '#1A4659',
    darkCyan: '#35E4DA',
    lightCyan: '#73EDE3',
    white: '#FFFFFF',
    gray: {
      100: '#3D444D',
      80: '#6D7782',
      60: '#919AA5',
      40: '#CACBD3',
      20: '#E6E9ED',
    },
  },

  font: {
    h1: {
      'font-size': '2rem',
      'font-weight': '800',
    },
    h2: {
      'font-size': '1.75rem',
      'font-weight': '800',
    },
    h3: {
      'font-size': '1.5rem',
      'font-weight': '600',
    },
    h4: {
      'font-size': '1.375rem',
      'font-weight': '600',
    },
    h5: {
      'font-size': '1.25rem',
      'font-weight': '500',
    },
    h6: {
      'font-size': '1.125rem',
      'font-weight': '500',
    },
    p: {
      'font-size': '1rem',
      'font-weight': '400',
    },
  },

  mediaQuery: {
    phone: '@media (min-width: 640px)',
    tabPort: '@media (min-width: 768px)',
    tabLand: '@media (min-width: 1024px)',
    desk: '@media (min-width: 1280px)',
    bigDesk: '@media (min-width: 1536px)',
  },
};

export default theme;

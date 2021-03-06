const Link = {
  baseStyle: {},
  variants: {
    default: { color: 'primary.500' },
    subtle: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'neutral.600' : 'default.light',
      textDecoration: 'none',
      _hover: {
        color: colorMode === 'light' ? 'default.dark' : 'neutral.200',
        textDecoration: 'none',
      },
    }),
    large: ({ colorMode }) => ({
      fontSize: '1.25rem',
      color: colorMode === 'light' ? 'neutral.600' : 'default.light',
      textDecoration: 'none',
      _hover: {
        color: colorMode === 'light' ? 'default.dark' : 'neutral.200',
        textDecoration: 'none',
      },
    }),
  },
  defaultProps: {
    variant: 'default',
  },
};

export default Link;

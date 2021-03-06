const styles = {
  global: ({ colorMode }) => ({
    body: {
      bg: colorMode === 'light' ? 'default.light' : 'default.dark',
      color: colorMode === 'light' ? 'default.dark' : 'default.light',
    },
    '#__next': {
      p: { base: '0.5rem 1rem', sm: '2rem' },
      mx: 'auto',
      minHeight: '100vh',
      maxW: '1200px',
      display: 'grid',
      gridTemplate: 'auto 1fr auto / 1fr',
    },
    pre: {
      p: 4,
      mb: 4,
      w: '100%',
      maxW: { base: 'calc(100vw - 2rem)', sm: 'calc(100vw - 4rem)' },
      overflowX: 'auto',
      fontSize: '.875rem',
      lineHeight: '1.7142857',
      bg: colorMode === 'light' ? 'neutral.100' : 'neutral.800',
      border: '1px solid',
      borderColor: colorMode === 'light' ? 'gray.200' : 'neutral.600',
      borderRadius: 'sm',
    },
    'pre::-webkit-scrollbar': { display: 'none' },
    "pre[class*='language-']": {
      color: colorMode === 'light' ? 'neutral.700' : 'neutral.100',
    },
    '.token.prolog, .token.comment, .token.doctype, .token.cdata, .token.punctuation':
      {
        color: colorMode === 'light' ? 'neutral.300' : 'neutral.400',
      },
    '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted':
      { color: '#10b981' },
    '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted':
      { color: '#8b5cf6' },
    '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string':
      {
        color: '#f59e0b',
      },
    '.token.atrule, .token.attr-value, .token.keyword': {
      color: '#3b82f6',
    },
    '.token.function, .token.class-name': { color: '#ec4899' },
    '.token.regex, .token.important, .token.variable': { color: '#f59e0b' },
    '.remark-code-title': {
      py: '.75rem',
      px: '1.25rem',
      fontWeight: 'bold',
      bg: colorMode === 'light' ? 'neutral.200' : 'neutral.900',
      borderTopRadius: 'sm',
      border: '1px solid',
      borderBottom: 'none',
      borderColor: colorMode === 'light' ? 'gray.200' : 'neutral.600',
    },
    '.remark-code-title + pre': { borderTopRadius: 'none' },
    '.cover-image': { borderRadius: 'sm' },
    '.post-images': { borderRadius: 'sm', mb: '2rem !important' },
    '.mdx-marker': {
      px: '2px',
      mx: '-1rem',
      display: 'block',
      bg: colorMode === 'light' ? 'neutral.150' : 'neutral.700',
      borderLeft: '3px solid',
      borderColor: 'primary.500',
    },
    '.anchor': {
      position: 'absolute',
      pr: '0.5rem',
      ml: '-1rem',
      w: '80%',
      textDecoration: 'none !important',
      transform: 'translateX(-2.5rem)',
      opacity: 0,
    },
    '.anchor:after': {
      content: '"#"',
      color: colorMode === 'light' ? 'neutral.200' : 'neutral.700',
    },
    '.anchor:hover': { opacity: 1 },
  }),
};

export default styles;

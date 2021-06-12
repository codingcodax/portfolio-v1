import { ThemeOverride } from '@chakra-ui/react';

const styles: ThemeOverride = {
	global: ({ colorMode }: { colorMode: string }) => ({
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
	}),
};

export default styles;
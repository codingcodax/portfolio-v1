import { ThemeOverride } from '@chakra-ui/react';
import { ChakraProps } from '@chakra-ui/system';

const Button: ThemeOverride = {
	baseStyle: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		borderRadius: 'sm',
	},
	sizes: {
		sm: { fontSize: 'xs', px: '0.75rem', py: '0.5rem' },
		md: { fontSize: 'md', px: '1rem', py: '0.5rem' },
		lg: { fontSize: 'lg', px: '1.5rem', py: '0.75rem' },
	},
	variants: {
		primary: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			border: '1px solid',
			borderColor:
				colorMode === 'light' ? 'default.dark' : 'default.light',
			color: colorMode === 'light' ? 'default.dark' : 'default.light',
			_hover: {
				bg: colorMode === 'light' ? 'default.dark' : 'default.light',
				color: colorMode === 'light' ? 'default.light' : 'default.dark',
			},
			_active: {
				bg: 'default.dark',
				color: 'default.light',
			},
			_disabled: {
				borderColor: 'neutral.200',
				color: 'neutral.200',
			},
		}),
		secondary: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			bg: colorMode === 'light' ? 'default.dark' : 'default.light',
			color: colorMode === 'light' ? 'default.light' : 'default.dark',
			_hover: {
				bg: colorMode === 'light' ? 'neutral.600' : 'neutral.200',
			},
			_active: {
				bg: colorMode === 'light' ? 'default.dark' : 'default.light',
			},
			_disabled: {
				bg: 'neutral.100',
				color: 'neutral.200',
			},
		}),
		primaryThemed: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			border: '1px solid',
			borderColor:
				colorMode === 'light' ? 'primary.500' : 'secondary.300',
			color: colorMode === 'light' ? 'primary.500' : 'secondary.300',
			_hover: {
				bg: colorMode === 'light' ? 'primary.600' : 'secondary.400',
				color: colorMode === 'light' ? 'default.light' : 'default.dark',
			},
		}),
		secondaryThemed: ({
			colorMode,
		}: {
			colorMode: string;
		}): ChakraProps => ({
			bg: colorMode === 'light' ? 'primary.500' : 'secondary.300',
			color: colorMode === 'light' ? 'default.light' : 'default.dark',
			_hover: {
				bg: colorMode === 'light' ? 'primary.600' : 'secondary.400',
			},
		}),
		icon: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			bg: colorMode === 'light' ? 'neutral.100' : 'neutral.700',
			color: colorMode === 'light' ? 'default.dark' : 'default.light',
			_hover: {
				bg: colorMode === 'light' ? 'neutral.200' : 'neutral.600',
			},
		}),
	},
	defaultProps: { size: 'md', variant: 'primary' },
};

export default Button;

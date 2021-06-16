import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import theme from '@/styles/theme';
import Layout from '@/components/Layout';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Layout>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default MyApp;

import { Flex, Heading, Text } from '@chakra-ui/layout';

import Seo from '@/components/Seo';
import ContainerWrapper from '@/components/ContainerWrapper';

/**
 * Newsletter: Newsletter page will contain my newsletter sign up form, as well as additional information about the newsletter content and schedule.
 * @return {JSX.Element} The JSX Code for the Newsletter page component
 */
const Newsletter = () => {
	return (
		<Flex as='main' direction='column' align='center' justify='center'>
			<Seo name='Newsletter 📧' path='/newsletter' />

			<ContainerWrapper>
				<Heading as='h1' size='xl'>
					Newsletter 📧
				</Heading>
				<Text mb='1rem'>
					This page will contain my newsletter sign up form, as well
					as additional information about the newsletter content and
					schedule.
				</Text>
			</ContainerWrapper>
		</Flex>
	);
};

export default Newsletter;
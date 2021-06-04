import { useColorModeValue } from '@chakra-ui/color-mode';
import { Divider, HStack, Text, VStack } from '@chakra-ui/layout';

import Link from './Link';

const Footer = (): JSX.Element => {
	const color = useColorModeValue('default.dark', 'default.light');

	return (
		<VStack as='section' mt={20} spacing={10}>
			<Divider borderColor={color} />
			<HStack
				as='footer'
				w='100%'
				maxW='800px'
				align='start'
				justify='space-between'
			>
				<VStack as='section' spacing={2} align='start'>
					<Link href='/' variant='subtle'>
						Home
					</Link>
					<Link href='/about' variant='subtle'>
						About
					</Link>
					<Link href='/projects' variant='subtle'>
						Projects
					</Link>
					<Link href='/blog' variant='subtle'>
						Blog
					</Link>
				</VStack>
				<VStack as='section' spacing={2} align='center'>
					<Link href='/newsletter' variant='subtle'>
						Newsletter
					</Link>
					<Link href='/community' variant='subtle'>
						Community
					</Link>
					<Link href='/uses' variant='subtle'>
						Uses
					</Link>
				</VStack>
				<VStack as='section' spacing={2} align='end'>
					<Link href='https://github.com/a12989x/' variant='subtle'>
						GitHub
					</Link>
					<Link
						href='https://www.linkedin.com/in/codax/'
						variant='subtle'
					>
						Linkedin
					</Link>
					<Link href='https://twitter.com/__codax__' variant='subtle'>
						Twitter
					</Link>
					<Link
						href='https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ'
						variant='subtle'
					>
						YouTube
					</Link>
				</VStack>
			</HStack>
			<Text>Copyright © 2021 Alexis Guzman</Text>
		</VStack>
	);
};

export default Footer;
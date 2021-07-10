import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { Box, Heading } from '@chakra-ui/react';

import { getPostBySlug, getPosts } from '@/utils/mdx';

import MDXComponents from '@/components/mdx-components';
import Information from '@/components/pages/blog/Information';

export const getStaticPaths = async () => {
	const posts = await getPosts();
	const paths = posts.map((p) => ({
		params: { slug: p.replace(/\.mdx/, '') },
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
	const { mdxSource, frontMatter } = await getPostBySlug(slug);

	return { props: { mdxSource, frontMatter } };
};

const Blog = ({ mdxSource, frontMatter }) => {
	return (
		<Box as='main' mx='auto' maxW='800px' w='100%'>
			<Image
				className='cover-image'
				src={frontMatter.image}
				alt='cover'
				height={420}
				width={1000}
				blurDataURL={frontMatter.imageBlur}
				placeholder='blur'
				priority
			/>

			<Heading
				as='h1'
				size='2xl'
				mt={12}
				mb={20}
				mx='auto'
				maxW='container.sm'
			>
				{frontMatter.title}
			</Heading>

			<Information
				publishedAt={frontMatter.publishedAt}
				readingTime={frontMatter.readingTime}
			/>

			<Box as='section'>
				<MDXRemote {...mdxSource} components={MDXComponents} />
			</Box>
		</Box>
	);
};

export default Blog;
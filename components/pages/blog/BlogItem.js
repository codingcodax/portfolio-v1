import Link from '@/components/Link';
import useColorModeValues from '@/hooks/useColorModeValues';
import { Grid, Heading, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

const BlogItem = ({ title, summary, slug, publishedAt }) => {
  const { inverseColor } = useColorModeValues();

  return (
    <Link
      href={`/blog/${slug}`}
      mb={8}
      display='inline-block'
      color={inverseColor}
      _hover={{ color: 'primary.500', textDecoration: 'none' }}
    >
      <Grid
        gridTemplate={{ base: '1fr auto / 1fr', md: '1fr / 1fr auto' }}
        columnGap={2}
        mb={2}
      >
        <Heading as='h4' size='md'>
          {title}
        </Heading>

        <Text color='neutral.400'>{format(publishedAt, 'MMM DD, YYYY')}</Text>
      </Grid>
      <Text noOfLines={3}>{summary}</Text>
    </Link>
  );
};

export default BlogItem;

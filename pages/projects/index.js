import { Box, Heading, Text } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

import { pageContainer } from '@/animations/pages';

import Seo from '@/components/Seo';
import AllProjects from '@/components/Projects';

const BoxBox = motion(Box);

/**
 * Projects: Projects page will contain a list of projects I've made or have worked on.
 * @return {JSX.Element} The JSX Code for the Projects page component
 */
const Projects = () => {
  return (
    <BoxBox
      as='main'
      mx='auto'
      width='100%'
      variants={pageContainer}
      initial='hidden'
      animate='show'
    >
      <Seo name='Projects 🎲' path='/projects' />

      <Heading as='h1' size='2xl' mt={12} mb={20} mx='auto' maxW='container.sm'>
        Projects 🎲
      </Heading>
      <Text mb={20} mx='auto' maxW='container.sm'>
        Hey there! Here you will find my preferred projects that I have done
        throughout my career with different technologies, I hope you have fun
        seeing each.
      </Text>

      <AllProjects />
    </BoxBox>
  );
};

export default Projects;

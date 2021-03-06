import NextLink from 'next/link';
import { VStack, Link as ChakraLink, Box } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

const item = { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1 } };

const VStackBox = motion(VStack);

const NavItem = ({ href, children, variant = 'subtle', ...props }) => {
  return (
    <VStackBox
      as='li'
      h='100%'
      align='start'
      listStyleType='none'
      variants={item}
    >
      <NextLink href={href} passHref>
        <ChakraLink
          mr={{ base: 0, sm: 4 }}
          position='relative'
          variant={variant}
          sx={{
            _before: {
              content: '""',
              transformOrigin: '50% 100%',
              transition:
                'clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
              clipPath:
                'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
              position: 'absolute',
              width: '100%',
              height: '1px',
              bg: 'primary.500',
              top: '100%',
              left: 0,
              pointerEvents: 'none',
            },
            _after: {
              position: 'absolute',
              width: '100%',
              height: '1px',
              bg: 'primary.500',
              top: '100%',
              left: 0,
              pointerEvents: 'none',
            },
            _hover: {
              _before: {
                transform: 'translate3d(0, 2px, 0) scale3d(1.08, 3, 1)',
                clipPath:
                  'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)',
                bg: 'primary.500',
              },
              span: {
                color: 'primary.500',
                transform: 'translate3d(0, -2px, 0)',
              },
            },
            span: {
              display: 'inline-block',
              transition: 'transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
            },
          }}
          {...props}
        >
          <Box as='span'>{children}</Box>
        </ChakraLink>
      </NextLink>
    </VStackBox>
  );
};

export default NavItem;

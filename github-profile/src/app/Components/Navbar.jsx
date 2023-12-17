import { Flex, Box, Image, Button, Spacer } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" py={6} alignItems="center">
      <Box position="relative" aspectRatio={5 / 3} minHeight={20}>
        <Image
          src={'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'}
          alt='Github'
          sx={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
      </Box>
      <Spacer />
      <Box>
        <Button size="md" colorScheme="whatsapp">
          Search
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;

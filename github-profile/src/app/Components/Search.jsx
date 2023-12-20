import { Button, Input, VStack, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import UserDetails from './UserDetails'; 

const Search = () => {
  const [query, setQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();

      if (data.message === 'Not Found') {
        toast({
          title: 'User Not Found',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while fetching user data.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack align="start" spacing={4}>
      <form onSubmit={handleSubmit}>
        <Input
          variant="outline"
          placeholder="Type a username"
          focusBorderColor="green.500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          size="md"
          type="submit"
          colorScheme="whatsapp"
          mt={4}
          isLoading={loading}
          disabled={!query || loading}
          opacity={!query ? 0.5 : 1}
        >
          Search
        </Button>
      </form>

      {userData && <UserDetails user={userData} />}
    </VStack>
  );
};

export default Search;

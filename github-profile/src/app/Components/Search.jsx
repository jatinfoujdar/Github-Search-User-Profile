import { Button, Input } from '@chakra-ui/react'
import React from 'react'

const Search = () => {
  return (
    <form>
        <Input varient={"outline"}
        placeholder={"Type a username"}
        focusBorderColor='green.500'
        />
        <Button size={"md"} type='submit' colorScheme= "whatsapp" mt={4}>Search</Button>
    </form>
  )
}

export default Search
"use client"
import { Button, Container, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";


export default function Home(){
  return <Container maxW="container.lg">

    <Navbar/>
    <Text fontSize={"3xl"} textAlign={"center"}>
      Search users on Github
    </Text>
    <Search/>
  </Container>;
}
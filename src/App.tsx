import { Heading, Text, Box, Flex, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import "./App.css";

function App() {

  return (
    <Flex
      width={"100%"}
      height={"100%"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Menu>
        <MenuButton as={Button} >
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Box maxW="2xl" m="0 auto">
        <Heading as="h1" textAlign="center" fontSize="5xl" mt="100px">
          Welcome Everybody!
        </Heading>
        <Text fontSize="xl" textAlign="center" mt="30px">
          Tutorials and step-by-step guides from CodingTheSmartWay. Learn how to
          build web applications!
        </Text>
        <Text
          w="fit-content"
          p="4"
          px="50px"
          bg="blue.300"
          borderRadius="10px"
          m="0 auto"
          mt="8"
          fontWeight="bold"
          color="white"
          fontSize="xl"
        >
          Get Started
        </Text>
      </Box>
    </Flex>
  );
}

export default App;
import * as React from "react"
import {
  ChakraProvider,
  extendTheme,
  Icon,
  VStack,
  Heading,
} from "@chakra-ui/react";
import type { GlobalStyleProps, Styles } from '@chakra-ui/theme-tools';
import AppTitleThemeSwitcher from './components/AppTitleThemeSwitcher';
import AddNewToDoItem from './components/AddNewToDoItem';
import { mode } from '@chakra-ui/theme-tools';
import { SiTodoist } from "react-icons/si";

// setup light/dark mode global defaults
const styles: Styles = {
  global: (props) => ({
    body: {
      // color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#fbfaf5', 'dark')(props)
    }
  })
};

const theme = extendTheme({
  styles,
});

export const App = () => {

  return (
  <ChakraProvider theme={theme}>
    <VStack p='16'>
      <AppTitleThemeSwitcher lightFontColor='blue.600' darkFontColor='red.600'>
        <Icon as={SiTodoist} fontSize='4xl' />
        <Heading fontSize='4xl' py='auto'>My Todo-s</Heading>
      </AppTitleThemeSwitcher>
      <AddNewToDoItem darkBgColor='White' lightBgColor='cyan.100'/>
    </VStack>
  </ChakraProvider>
)}

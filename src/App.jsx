import './App.css'
import Router from './Router/Router'
import { useColorMode, IconButton, Flex, Link, Button, HStack, Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate()


  return (

    <>
      <Navbar />
      <Router />
    </>
  )
}

export default App

import React from 'react'
import { useColorMode, IconButton, Flex, Link, Button, HStack, Box, Icon, useColorModeValue, Stack, useDisclosure, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from 'react-router-dom';
import { ImLocation2 } from "react-icons/im"




const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Icon as={ImLocation2} fontSize={{ base: "24px", md: "30px" }} />
                </Box>
                <Box >
                    {
                        pathname === "/" ? <Button fontSize={"24px"} variant='link' onClick={() => navigate("/location")}>
                            Location
                        </Button> :
                            <Button fontSize={"24px"} variant='link' onClick={() => navigate("/")}>
                                Form
                            </Button>
                    }
                </Box>
                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button variant={"ghost"} onClick={toggleColorMode} fontSize={"24px"}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                <Avatar
                                    size={'sm'}
                                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                                />
                            </MenuButton>
                            <MenuList zIndex={1000} alignItems={'center'}>
                                <br />
                                <Center>
                                    <Avatar
                                        size={'2xl'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>Username</p>
                                </Center>
                                <br />
                                <MenuDivider />
                                <MenuItem>Your Profile</MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar


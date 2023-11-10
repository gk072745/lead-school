import React, { useRef } from 'react'
import { Flex, Stack, Heading, Text, Input, Button, Icon, useColorModeValue, createIcon, Image } from '@chakra-ui/react';
import loc from "../assets/loc.png"
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../redux/Action';
import { useNavigate } from 'react-router-dom';


const PostalForm = () => {
    const postalRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = () => {
        dispatch(getLocation(postalRef?.current?.value))
        navigate("/location")
    }
    return <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        py={12}
        mx="6"
        bg={useColorModeValue('gray.50', 'gray.800')}
    >
        <Stack
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={10}
            spacing={8}
            align={'center'}
        >
            <Image src={loc} w={24} h={24} />
            <Stack align={'center'} spacing={2}>
                <Heading
                    textTransform={'uppercase'}
                    fontSize={'3xl'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                >
                    Location
                </Heading>
                <Text textAlign={"center"} fontSize={'lg'} color={'gray.500'}>
                    Enter a Postal/Pin Code for location details.
                </Text>
            </Stack>
            <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
                <Input
                    ref={postalRef}
                    type={'text'}
                    placeholder={'123456'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    bg={useColorModeValue('gray.100', 'gray.600')}
                    rounded={'full'}
                    border={0}
                    _focus={{
                        bg: useColorModeValue('gray.200', 'gray.800'),
                        outline: 'none',
                    }}
                    onKeyDown={(e) => { if (e.key === "Enter") { handleSubmit() } }}

                />
                <Button
                    onClick={handleSubmit}
                    bg={'blue.400'}
                    rounded={'full'}
                    color={'white'}
                    flex={'1 0 auto'}
                    _hover={{ bg: 'blue.500' }}
                    _focus={{ bg: 'blue.500' }}
                >
                    Submit
                </Button>
            </Stack>
        </Stack>
    </Flex >
}


export default PostalForm
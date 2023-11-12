import React, { useEffect, useState } from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    VStack,
    Flex,
    Button,
    Link,
    useColorMode,
    Container,
    extendTheme,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    SimpleGrid,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearLocationFunc } from '../redux/Action';



export default function LocationUI({ data }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const x = useSelector((store) => store)
    const { isLoading, location, isError } = x
    const {
        "post code": postalCode,
        country,
        "country abbreviation": countryAbbreviation,
        places,
    } = data
    const [clear, setClear] = useState(false)

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const handleClear = () => {
        dispatch(clearLocationFunc())

    }

    console.log(location)

    useEffect(() => {
        if (Object.keys(location).length === 0) {
            setClear(true)
        } else {
            setClear(false)
        }
    }, [location])


    if (clear) {
        return <Center minH={"70vh"}>
            <Box textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text"
                >
                    204
                </Heading>
                <Text fontSize={["18px", "20px", "24px", "28px"]} fontWeight={"bold"} mt={3} mb={2}>
                    No Content
                </Text>
                <Text fontSize={["16px", "18px"]} color={'gray.500'} mb={6}>
                    Location info cleared successfully. Navigate to the form!
                </Text>

                <Button
                    size={["sm", "sm", "md", "lg"]}
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid"
                    onClick={() => navigate("/")}
                >
                    Form
                </Button>
            </Box>
        </Center>
    }

    return (
        <Center py={12} minH={"80vh"}>
            <Box
                role={'group'}
                p={6}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
            >
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        background: useColorModeValue('gray.400', 'gray.700'),
                        filter: 'blur(60px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(80px)',
                        },
                    }}
                >
                    <VStack
                        rounded={'lg'}
                        p={6}
                        align={"flex-start"}
                    >
                        <Flex gap={2} rounded={"lg"}>
                            <Text fontWeight={700} color={useColorModeValue('black.100', 'teal')} fontSize={"24px"} >
                                Country :
                            </Text>
                            <Text fontSize={"24px"} color={useColorModeValue('black.100', 'white')}>{country} </Text>
                            <Text fontSize={"24px"} color={useColorModeValue('black.400', 'grey')}>{countryAbbreviation} </Text>
                        </Flex>
                        <Flex gap={2} >
                            <Text fontWeight={700} color={useColorModeValue('black.100', 'teal')} fontSize={"24px"} >
                                Postal Code :
                            </Text>
                            <Text fontSize={"24px"} color={useColorModeValue('black.100', 'white')}>{postalCode}</Text>
                        </Flex>
                        {places && places.length && <Card place={places[0]} />}
                        <Flex gap={2}>
                            <Button onClick={onOpen} color={useColorModeValue("black", "white")} colorScheme='whiteAlpha' position={'relative'} left={"30%"}>
                                More Places
                            </Button>
                            <Button onClick={handleClear} color={useColorModeValue("black", "white")} colorScheme='whiteAlpha' position={'relative'} left={"30%"}>
                                Clear
                            </Button>
                        </Flex>
                    </VStack>

                    <Modal isOpen={isOpen} onClose={onClose} >
                        <ModalOverlay />
                        <ModalContent
                            bg={useColorModeValue('white', 'gray.800')}
                            color={useColorModeValue('gray.800', 'white')}
                        >
                            <ModalHeader>Places Information</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <VStack align="stretch" spacing={4}>
                                    {places?.map((place, index) => (
                                        <Card key={index} place={place} />
                                    ))}
                                </VStack>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={onClose}>Close</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </Center >
    );
}

const Card = ({ place }) => {
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg" m={2} >
            <Text as="h2" fontSize="xl" fontWeight="bold">
                {place['place name']}
            </Text>
            <Text>
                Latitude: {place.latitude}, Longitude: {place.longitude}
            </Text>
            <Text>
                State: {place.state}, Abbreviation: {place['state abbreviation']}
            </Text>
        </Box >
    );
};

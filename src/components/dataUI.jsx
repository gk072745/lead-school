import React, { useState } from 'react';
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



export default function LocationUI({ data }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isOpen, setIsOpen] = useState(false);
    const {
        "post code": postalCode,
        country,
        "country abbreviation": countryAbbreviation,
        places,
    } = data

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

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
                        <Button onClick={onOpen} color={useColorModeValue("black", "white")} colorScheme='whiteAlpha' position={'relative'} left={"30%"}>
                            More Places
                        </Button>
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

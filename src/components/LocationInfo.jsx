import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Heading, Text, Button, Center, Spinner } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import LocationUI from './dataUI'



const LocationInfo = () => {
    const x = useSelector((store) => store)
    const { isLoading, location, isError } = x
    const navigate = useNavigate();


    return (
        <>
            {isLoading ? (
                <Center h="75vh">
                    <Spinner speed='.80s' thickness='3.5px' size={"xl"} />
                </Center>
            ) : isError ? (
                <Center minH={"70vh"}>
                    <Box textAlign="center" py={10} px={6}>
                        <Heading
                            display="inline-block"
                            as="h2"
                            size="2xl"
                            bgGradient="linear(to-r, teal.400, teal.600)"
                            backgroundClip="text"
                        >
                            404
                        </Heading>
                        <Text fontSize={["18px", "20px", "24px", "28px"]} fontWeight={"bold"} mt={3} mb={2}>
                            Address Not Found
                        </Text>
                        <Text fontSize={["16px", "18px"]} color={'gray.500'} mb={6}>
                            No info for this location. try other postal code!
                        </Text>

                        <Button
                            size={["sm", "sm", "md", "lg"]}
                            colorScheme="teal"
                            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                            color="white"
                            variant="solid"
                            onClick={() => navigate("/")}
                        >
                            Try again
                        </Button>
                    </Box>
                </Center>
            ) : (
                <LocationUI data={location} />
            )}
        </>
    );
};

export default LocationInfo;

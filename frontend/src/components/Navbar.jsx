import { Button, Container, Flex, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";


export default function Navbar() {
    const {colorMode,toggleColorMode}=useColorMode()
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={ {
                base:"column",
                sm:"row"
            }}
        >

            <Link to="/" style={{display:'flex',alignItems:'left'}}>
            <Text
            fontSize={{base:"22",sm:"28"}}
            fontWeight={"bold"}
            >
               The
            </Text>
            <Image src="../../public/logo.png"
            boxSize="30px"
            mx={2}
            mt={2}
            />
            
            <Text
            fontSize={{base:"22",sm:"28"}}
            fontWeight={"bold"}
            >
               ridge
            </Text>
            
            </Link>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button>
                    <CiSquarePlus />
                </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? "🌙" : "🌞"}
                </Button>


            </HStack>

           

        </Flex>
      
    </Container>
  )
}

import { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container
      maxW="container.md"
      py={12}
      style={{
        backgroundColor: "#FAB555",
        borderRadius: "60px", 
        width: "100%",
        height: "420px", 
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VStack spacing={6} align="center" w="full">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" >
          Contact Us
        </Text>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={2} align="stretch">
            <FormControl isRequired marginLeft={"150px"}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                size="lg"
                width={"400px"}

                bg="#fde7c9" 
                _placeholder={{ color: "gray.500" }} 
                borderRadius={"20px"}
              />
            </FormControl>

            <FormControl isRequired marginLeft={"150px"}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                size="lg"
                width={"400px"}
                bg="#fde7c9" 
                _placeholder={{ color: "gray.500" }}
                borderRadius={"20px"}

              />
            </FormControl>

            <FormControl isRequired marginLeft={"150px"}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                size="lg"
                minH="30px"
                width={"400px"}
                height={"80px"}


                bg="#fde7c9" 
                _placeholder={{ color: "gray.500" }} 
                borderRadius={"20px"}

              />
            </FormControl>

            <Button
              backgroundColor={"#AF2F64"}
              color={"white"}
              size="lg"
              type="submit"
              width={"150px"}
              mx="auto"
             
            >
              Send the Message
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
}

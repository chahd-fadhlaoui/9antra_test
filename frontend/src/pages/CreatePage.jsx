import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCourseStore } from "../store/course";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const [newCourse, setNewCourse] = useState({
    title: "",
    price: "",
    image: "",
  });
  const nav = useNavigate();

  const toast=useToast()
const {createCourse}=useCourseStore()
  const handleAddCourse = async ()=>{
   const {success,message}= await  createCourse(newCourse)
   if(!success){
    toast({
        title:"Error",
        description:message,
        status:"error",
        isClosable:true
    })
   }else{
    toast({
        title:"Success",
        description:message,
        status:"success",
        isClosable:true
    }); 
    nav("/admin");

   }
 
}
  return (
    <Container maxW={"container.sm"}>
      
      <VStack spacing={8}>
        {/* form here */}

        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create new course
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "#af2f64")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Course title "
              name="title"
              value={newCourse.title}
              onChange={(e) =>
                setNewCourse({ ...newCourse, title: e.target.value })
              }
            />

            <Input
              placeholder="Price "
              name="price"
              type="number"
              value={newCourse.price}
              onChange={(e) =>
                setNewCourse({ ...newCourse, price: e.target.value })
              }
            />

            <Input
              placeholder="Image URL "
              name="image"
              value={newCourse.image}
              onChange={(e) =>
                setNewCourse({ ...newCourse, image: e.target.value })
              }
            />

            <Button
            colorScheme="blue" onClick={handleAddCourse} w="full"
            >
                 Add course 
            </Button>
          </VStack>
        </Box> 
      </VStack>
    </Container>
  );
}

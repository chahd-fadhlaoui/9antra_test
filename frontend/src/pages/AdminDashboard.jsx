import {
  Box,
  Flex,
  VStack,
  Text,
  Link as ChakraLink,
  Container,
  Button,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  useColorModeValue, 
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCourseStore } from "../store/course";

export default function AdminDashboard() {
  const { fetchCourses, courses, deleteCourse, updateCourse } = useCourseStore();
  const [updatedCourse, setUpdatedCourse] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const textColor = useColorModeValue("black", "white"); 
  const bgColor = useColorModeValue("gray.50", "gray.800"); 
  const sidebarBgColor = useColorModeValue("orange.400", "orange.600");

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleDeleteCourse = async (cid) => {
    const { success, message } = await deleteCourse(cid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateCourse = async (updatedCourse) => {
    const { success, message } = await updateCourse(updatedCourse._id, updatedCourse);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Course updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  };

  return (
    <Flex minH="100vh">
      {/* Sidebar */}
      <Box
        w="20%"
        bg={sidebarBgColor} 
        color="white"
        p={4}
        position="sticky"
        top={0}
        h="100vh"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={8} textAlign="center" color={textColor}>
          Admin Panel
        </Text>
        <VStack align="flex-start" spacing={4}>
          <ChakraLink
            as={Link}
            to="/admin"
            _hover={{ textDecoration: "underline" }}
            fontWeight="semibold"
            color={textColor}
          >
            Dashboard
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/create"
            _hover={{ textDecoration: "underline" }}
            fontWeight="semibold"
            color={textColor}
          >
            Create Course
          </ChakraLink>
         
         
        </VStack>
      </Box>

      {/* Main Content */}
      <Box w="80%" bg={bgColor}>
        <Box
          bgGradient="linear(to-r, #b5356a, #ffba59)"
          py={8}
          textAlign="center"
          color="white"
        >
          <Text fontSize="4xl" fontWeight="bold">
            Admin Dashboard
          </Text>
          <Text fontSize="lg" mt={2}>
            Manage courses and more from here.
          </Text>
        </Box>

        <Container maxW="container.xl" py={12}>
          <Box overflowX="auto">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "8px", border: "1px solid #ddd" }}>Id</th>
                  <th style={{ padding: "8px", border: "1px solid #ddd" }}>Course Title</th>
                  <th style={{ padding: "8px", border: "1px solid #ddd" }}>Price</th>
                  <th style={{ padding: "8px", border: "1px solid #ddd" }}>Image</th>
                  <th style={{ padding: "8px", border: "1px solid #ddd" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={course._id}>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>{index + 1}</td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>{course.title}</td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>{course.price} dt</td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      <Image
                        src={course.image}
                        alt={course.title}
                        boxSize="100px"
                        objectFit="cover"
                        borderRadius="md"
                        width={"100px"}
                        height={"100px"}
                      />
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      <HStack spacing={2}>
                        <IconButton
                          icon={<FaEdit />}
                          colorScheme="blue"
                          onClick={() => {
                            setUpdatedCourse(course);
                            onOpen();
                          }}
                          size="sm"
                        />
                        <IconButton
                          icon={<MdDeleteOutline />}
                          colorScheme="red"
                          onClick={() => handleDeleteCourse(course._id)}
                          size="sm"
                        />
                      </HStack>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>

          {courses.length === 0 && (
            <Box mt={8} textAlign="center">
              <Text fontSize="xl" fontWeight="bold" color="gray.500">
                No courses found 😥
              </Text>
              <Text
                fontSize="lg"
                color="blue.500"
                textDecoration="underline"
                as={Link}
                to="/create"
              >
                Create a New Course
              </Text>
            </Box>
          )}
        </Container>
      </Box>

      {/* Modal for Update Course */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={2}>
              <Input
                placeholder="Course Title"
                name="title"
                value={updatedCourse.title}
                onChange={(e) => setUpdatedCourse({ ...updatedCourse, title: e.target.value })}
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedCourse.price}
                onChange={(e) => setUpdatedCourse({ ...updatedCourse, price: e.target.value })}
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedCourse.image}
                onChange={(e) => setUpdatedCourse({ ...updatedCourse, image: e.target.value })}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleUpdateCourse(updatedCourse)}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

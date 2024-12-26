import { useEffect } from "react";
import { useCourseStore } from "../store/course";
import { SimpleGrid, Text, Box, Image, Heading, Container, VStack } from "@chakra-ui/react";  // Import Chakra UI components

export default function Card() {
  const { fetchCourses, courses } = useCourseStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  console.log("courses", courses);

  if (!courses || courses.length === 0) {
    return (
      <Container maxW="container.xl" py={12}>
        <Text textAlign="center" fontSize="lg">
          No courses available at the moment.
        </Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="30px" 
          fontWeight="bold"
          bgGradient="linear(to-r, #b5356a, #ffba59)"
          bgClip="text"
          textAlign="center"
        >
          Discover our courses
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w="full"
        >
          {courses.map((course) => (
            <Box
              key={course.id} 
              shadow="lg"
              rounded="lg"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
              bg="white"
            >
              <Image
                src={course.image}
                alt={course.title}  
                h={48}
                w="full"
                objectFit="cover"
              />

              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  {course.title}
                </Heading>
                <Text fontWeight="bold" fontSize="xl" color="#b5356a"  mb={4}>
                  {course.price} DT/Month
                </Text>

                
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

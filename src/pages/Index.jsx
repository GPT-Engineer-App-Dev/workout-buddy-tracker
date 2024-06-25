import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, monitor your progress, and stay motivated!</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button leftIcon={<FaRunning />} colorScheme="teal" variant="solid" size="lg">
            Cardio
          </Button>
          <Button leftIcon={<FaDumbbell />} colorScheme="teal" variant="solid" size="lg">
            Strength
          </Button>
          <Button leftIcon={<FaHeartbeat />} colorScheme="teal" variant="solid" size="lg">
            Health
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;